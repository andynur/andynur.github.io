import ProfileCard from '@/components/ProfileCard'
import ScrollTop from '@/components/ScrollTop'
import { PageSeo } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar } = frontMatter

  return (
    <>
      <PageSeo title={`About - ${name}`} description={`About me - ${name}`} />
      <ScrollTop />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            More about me and myself
          </p>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 pt-8">
          {/* <ProfileCard /> */}
          <div className="pb-8 xl:pl-8 prose prose-lg dark:prose-dark max-w-none xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
