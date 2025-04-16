import Contact from "@/components/contact/contact";
import Departments from "@/components/home/departments/departments";
import Hero from "@/components/home/hero";
import KeyPoints from "@/components/home/keyPoints";
import Partners from "@/components/home/partners/partners";
import Posts from "@/components/home/posts/posts";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <KeyPoints />
      <Departments />
      <Posts />
      <Partners />
      <section className="w-screen flex justify-center items-center bg-black [margin-top:6em!important] [padding:_max(7vw,_100px)_0px!important] rounded-tl-[100] rounded-tr-[100px] max-lg:rounded-tl-[50px] max-lg:rounded-tr-[50px]">
        <Contact color="white" />
      </section>
      <div className="h-screen"></div>
    </main>
  );
}
