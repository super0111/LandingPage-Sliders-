import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <section className="mt-20 container flex flex-col items-center text-center justify-center">
        <h4 className="text-2xl mb-4">Get in touch</h4>
        <p className="mb-8 text-slate-400">
          Find us at any of these channels
        </p>
        <div className="flex gap-8">
          asdf
          {/* {
            socialItems.map((item, i) => (
              <Link key={i} target="_blank" href={item.to}>
                asdf
              </Link>
            ))
          } */}
        </div>
      </section>
      <footer className="bg-slate-800 mt-20 py-4 text-center text-white">
        Copyright © 2023 Supercluster Labs. All Rights Reserved
      </footer>
    </div>
  )
}