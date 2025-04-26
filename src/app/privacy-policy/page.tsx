import MdxLayout from "~/components/layouts/mdx-layout";
import PrivacyPolicy from "~/markdown/privacy-policy.mdx";
import Header from "~/components/sections/header";
import Footer from "~/components/sections/footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-[94rem] flex-col px-4 pt-5 pb-30 md:pt-10 md:pb-40 lg:px-8">
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
}
