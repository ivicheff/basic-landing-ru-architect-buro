import MdxLayout from "~/components/layouts/mdx-layout";
import TermsOfService from "~/markdown/terms-of-service.mdx";
import Header from "~/components/sections/header";
import Footer from "~/components/sections/footer";

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-[94rem] flex-col  px-4 pt-5 pb-30 md:pt-10 md:pb-40  lg:px-8">
        <TermsOfService />
      </main>
      <Footer />
    </>
  );
}
