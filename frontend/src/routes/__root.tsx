import { Outlet, createRootRoute } from '@tanstack/react-router'
import {Logo} from "@/components/navbar/logo.tsx";
import {NavMenu} from "@/components/navbar/nav-menu.tsx";
import {NavigationSheet} from "@/components/navbar/navigation-sheet.tsx";

export const Route = createRootRoute({
  component: () => (
      <div className="min-h-screen min-w-screen star-background flex flex-col items-center">
        <nav className="fixed h-16 bg-background border dark:border-slate-700/70 w-[calc(100vw-64px)] m-4 rounded-xl">
            <div className="h-full flex items-center justify-between mx-auto px-4">
                <Logo/>
                <div className="flex items-center gap-3">
                    {/* Desktop Menu */}
                    <NavMenu className="hidden md:block"/>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <NavigationSheet/>
                    </div>
                </div>
            </div>
        </nav>
        <div className="mt-[80px] h-[calc(100vh-80px)] overflow-y-auto p-8">
            <Outlet/>
        </div>
      </div>
  ),
})
