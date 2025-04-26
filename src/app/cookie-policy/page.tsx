import Footer from "~/components/sections/footer";
import Header from "~/components/sections/header";
import CookiePolicy from "~/markdown/cookie-policy.mdx";

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-[94rem] flex-col px-4 pt-5 pb-30 md:pt-10 md:pb-40 lg:px-8">
        <CookiePolicy />
      </main>
      <Footer />
    </>
  );
}
