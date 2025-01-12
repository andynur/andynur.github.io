import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-8 md:mt-16">
        <div className="my-4 pt-6 pb-8 space-y-2 md:space-y-5 xl:grid xl:grid-cols-3">
          <div className="xl:col-span-2 pr-8">
            <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              <p className="mt-4 mb-8">
                Sorry for the inconvenience but we&rsquo;re performing some maintenance at the
                moment. If you need to you can always contact me, otherwise we&rsquo;ll be back
                online shortly!
              </p>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
