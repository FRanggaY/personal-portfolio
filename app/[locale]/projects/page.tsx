import * as React from 'react';
import { LanguageParams } from '@/types/general';
import { dataLocale, validLocale } from '@/lib/locale';
import { Metadata } from 'next';
import siteMetadata from '@/lib/siteMetaData';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';

import { getPublicProfileProjects } from '@/data/repository/public_profile';

import { PublicProfileProject } from '@/types/public_profile';
import HeroGeneral from '@/components/shared/hero-general';

// project
import { data as StaticProjectEn } from '@/data/static/en/public_profile_project';
import { data as StaticProjectId } from '@/data/static/id/public_profile_project';

import CardProject from '@/components/layout/card/card-project';
import PaginationMenu from '@/components/shared/pagination-menu';

export const metadata: Metadata = {
  title: `Projects | ${siteMetadata.author}`,
  description: "Portfolio for personal",
};

export default async function About({ params, searchParams }: { readonly params: LanguageParams, readonly searchParams?: { [key: string]: string | string[] | undefined }; }) {
  const locale = validLocale(params.locale);
  const tNav = dataLocale[locale].navbar;
  const tBody = dataLocale[locale].projects;

  const page = searchParams?.page ?? 1;
  let loadStaticData = false;


  const customParams = {
    offset: page,
    size: 10,
  }

  let dataProjects = await getPublicProfileProjects(String(siteMetadata.apiUsername), locale, customParams)
  if (dataProjects.data.length === 0) { // get from static
    // check language 
    if (locale === 'id') {
      dataProjects = StaticProjectId
    } else {
      dataProjects = StaticProjectEn
    }
    loadStaticData = true;
  }

  return (
    <div className='grid min-h-screen'>
      <Navbar
        titleHome={tNav.title.home}
        titleAbout={tNav.title.about}
        titleProjects={tNav.title.projects}
      />
      <main className='mt-24' >

        <HeroGeneral
          title={tBody.title.hero}
          description={tBody.description}
        />


        {
          dataProjects.data.length > 0 &&
          <div className='flex flex-col gap-10 mb-14'>
            <div className='flex gap-5 justify-center flex-wrap'>
              {
                dataProjects.data.map((item: PublicProfileProject) => {
                  return <CardProject
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.image_url}
                    slug={`/${locale}/project/${item.slug}`}
                  />
                })
              }
            </div>

            {
              !loadStaticData &&
              <PaginationMenu
                total_pages={dataProjects.meta.total_pages}
                current_page={dataProjects.meta.offset}
                previous={page !== '1'}
                next={page != dataProjects.meta.total_pages}
              />
            }
          </div>
        }

      </main>
      <Footer
        titleHome={tNav.title.home}
        titleAbout={tNav.title.about}
        titleProjects={tNav.title.projects}
      />
    </div>
  );
}
