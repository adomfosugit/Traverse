import Image from 'next/image';
import Link from 'next/link';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from 'react-icons/io';

const Footer = () => {
  return (
    <div className="bg-black text-white p-10 mt-16">
      <span className="w-screen inline-grid grid-cols-1 lg:grid-cols-4 gap-4 gap-y-10">
        <div className="lg:mx-auto">
          <div className="flex items-center h-10 cursor-pointer my-auto">
            <Image
              src="assets/icons/logo.svg"
              object-fit="contain"
              width={0}
              height={0}
              alt="left"
              className="w-10 h-10"
            />
            <p className="text-white pl-2 lg:text-2xl">Traverse</p>
          </div>
          <div className="flex mt-3">
            <a
              href="https://www.instagram.com/traverse_tech/"
              target="_blank"
              title="instagram"
              rel="noreferrer"
            >
              <IoLogoInstagram className="mr-5 h-7 w-7" />
            </a>
            <a
              href="https://twitter.com/Traversetec"
              target="_blank"
              title="twitter"
              rel="noreferrer"
            >
              <IoLogoTwitter className="mr-5 h-7 w-7" />
            </a>
            <a
              href="https://web.facebook.com/traverseapps"
              target="_blank"
              title="facebook"
              rel="noreferrer"
            >
              <IoLogoFacebook className="mr-5 h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/company/traverseapps/?viewAsMember=true"
              target="_blank"
              title="linkedIn"
              rel="noreferrer"
            >
              <IoLogoLinkedin className="mr-5 h-7 w-7" />
            </a>
          </div>
        </div>
        <div className="lg:mx-auto">
          <p className="mb-5 cursor-pointer">
            <Link href="#">Relocation & Resettlement</Link>
          </p>
          <p className="mb-5 cursor-pointer">
            <Link href="#" className="pb-5">
              Remote Property
            </Link>
          </p>
          <p className="mb-5 cursor-pointer">
            <Link href="#" className="pb-5">
              Social PropTech
            </Link>
          </p>
          <p className="mb-5 cursor-pointer">
            <Link href="#" className="pb-5">
              Real Estate Investments
            </Link>
          </p>
        </div>
        <div className="lg:mx-auto">
          <p className="mb-5 cursor-pointer">
            <Link href="#">About Us</Link>
          </p>
          <p className="mb-5 cursor-pointer">
            <Link href="#" className="pb-5">
              Privacy
            </Link>
          </p>
          <p className="mb-5 cursor-pointer">
            <Link href="#" className="pb-5">
              FAQs
            </Link>
          </p>
          <a
            className="mb-5 cursor-pointer"
            href="mailto:hello@traverseapps.com"
            target="_blank"
            rel="noreferrer"
          >
            Email us : hello@traverseapps.com
          </a>
        </div>
        <span className="lg:mx-auto">
          <p>© 2023 Traverse</p>
        </span>
      </span>
    </div>
  );
};

export default Footer;
