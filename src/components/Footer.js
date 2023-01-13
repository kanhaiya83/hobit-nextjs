import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-100 text-slate-800 py-10 px-[5%] md:px-[10%]">
      <div class="w-full flex justify-start mb-3">
        <Image src="/images/logo.png" alt="" width={40} height={40} />
        <h2 className="uppercase text-3xl font-bold ml-2">HOBIT</h2>
      </div>
      <div class="grid grid-cols-2 gap-y-2 md:grid-cols-3 w-full mb-6">
        <div class="flex flex-col">
          <h3 className="text-lg font-semibold pb-2 border-primary-color border-b-2 mb-2 w-fit">
            Company
          </h3>
          <a href="#" class="text-sm mb-2">About Us</a>
          <a href="#" class="text-sm mb-2">Blog</a>
          <a href="#" class="text-sm mb-2">Careers</a>
          <a href="#" class="text-sm mb-2">Contact Us</a>
        </div>
        <div class="flex flex-col">
          <h3 className="text-lg font-semibold pb-2 border-primary-color border-b-2 mb-2 w-fit">
            Legal
          </h3>
          <a href="#" class="text-sm mb-2">Cookies Policy</a>
          <a href="#" class="text-sm mb-2">Privacy Policy</a>
          <a href="#" class="text-sm mb-2">Terms of Services</a>
          <a href="#" class="text-sm mb-2">Law Enforcement</a>
        </div>
        <div class="flex flex-col col-span-2 md:col-auto">
            <h1 className="font-semibold pb-2 border-b-2 border-primary-color mb-2 w-fit">Install App</h1>
            <div class="flex w-full">
                <a href="" className="mr-2">
                <Image src="/images/play-store.png" alt=""  className="h-10 rounded-lg"  width={160} height={40} />
                </a>
                <a href="">
                <Image src="/images/app-store.png" alt=""  className="h-10 rounded-lg"  width={160} height={40} />
                </a>
            
            </div>
        </div>
      </div>
      <div class="flex items-center justify-center md:justify-start mb-6">
        <h1 className="text-lg mr-2">FOLLOW US ON</h1>
        <a href="#">
        <Image src="/images/facebook.svg" alt="" width={32} height={32} />
        </a>
        <a href="#">
        <Image src="/images/linkedin.svg" alt="" width={32} height={32} />
        </a>
        <a href="#">
        <Image src="/images/instagram.svg" alt="" width={32} height={32} />
        </a>
        <a href="#">
        <Image src="/images/whatsapp.svg" alt=""  width={32} height={32} />
        </a>
      </div>
        <h4 className="text-slate-600 font-medium w-full text-center md:text-left">© 2022 All rights reserved by Hobit Technologies Pvt. Ltd.</h4>
    </footer>
  );
};
export default Footer;
