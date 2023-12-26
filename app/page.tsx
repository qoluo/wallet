import { LeftNavigation } from "@/components/general-components/left-navigation";
import { TopNavBar } from "@/components/general-components/top-nav-bar";
import { AccountsOverview } from "@/components/home-components/accounts-overview";

export default function LandingPage() {
  return (
    <div className="grid h-screen min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <LeftNavigation />
      <div className="flex flex-col">
        <TopNavBar />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-6">
            <h2 className="font-semibold text-lg md:text-xl">
              Accounts Overview
            </h2>
            <AccountsOverview />
          </div>
        </main>
      </div>
    </div>
  );
}
