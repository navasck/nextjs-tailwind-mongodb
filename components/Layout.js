import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title : "Next-Tailwind-MongoDB"}</title>
        <meta
          name="description"
          content="Next-Tailwind-MongoDB Ecommerce Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen justify-between">
        <header>
          <nav>
            <Link href="/">
              <a className="text-lg font-bold">CKN MEDIA</a>
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
