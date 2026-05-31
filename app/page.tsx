import BookingSection from "@/components/BookingSection/BookingSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip'>
      <div className=' w-full'>
        <BookingSection/>
        <Footer/>
      </div>
    </main>
  );
}
