import CustomFeed from "@/components/homepage/CustomFeed";
import GeneralFeed from "@/components/homepage/GeneralFeed";
import { buttonVariants } from "@/components/ui/Button";
import { getAuthSession } from "@/lib/auth";
import { Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import Sidebar from "./sidebar";
import AllCategory from "@/components/Category";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <>
      <Sidebar />

      <div className="sm:ml-64">
        <div className="mt-1 p-2 md:border-2 md:border-gray-200 md:border-dashed sm:border-none rounded-lg dark:border-gray-700">
          <div className="max-w-7xl mx-auto w-full h-full">
            <h1 className='h1 font-bold'>My Feed</h1>
            <div className="rounded-md py-4">
              <div className="flex justify-left text-left">
                <ul className="flex space-x-4">
                  <li>
                    <a href="#" className="text-slate-700 px-4 font-semibold hover:text-blue-400 transition duration-300">
                      Best
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-700 px-4 font-semibold hover:text-blue-400 transition duration-300">
                      Hot
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-700 px-4 font-semibold hover:text-blue-400 transition duration-300">
                      New
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-700 px-4 font-semibold hover:text-blue-400 transition duration-300">
                      Controversial
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-slate-700 px-4 font-semibold hover:text-blue-400 transition duration-300">
                      Top
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-700 px-4 font-semibold hover:text-blue-400 transition duration-300">
                      Rising
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-2">
              {/* @ts-expect-error server component */}
              {session ? <CustomFeed /> : <GeneralFeed />}

              {/* subreddit info */}
              <div className="overflow-hidden bg_primary order-first md:order-last">
                <div className="bg-green-400 px-6 py-2">
                  <p className="font-semibold py-3 text-white flex items-center gap-1.5">
                    <HomeIcon className="h-4 w-4" />
                    Home
                  </p>
                </div>
                <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                  <div className="flex justify-between gap-x-4 py-3">
                    <p className="text-zinc-500">
                      Your Personal TechnoTips Home Page. Come here to check in
                      with your favorite communities.
                    </p>
                  </div>

                  <Link
                    className={buttonVariants({
                      className: "w-full mt-4 mb-6",
                    })}
                    href={`/r/create`}
                  >
                    Create Community
                  </Link>
                </dl>
                <div className="h-auto p-2 mb-2 scroll-smooth">
                  <div className="px-2">
                    <h3 className="font-semibold py-2 flex items-center gap-1.5">
                      Trending Communities
                    </h3>
                  </div>
                  <AllCategory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
