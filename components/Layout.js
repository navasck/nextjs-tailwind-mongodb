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
          <nav className="flex h-12 justify-between shadow items-center px-4">
            <Link href="/" className="text-lg font-bold">
              CKN MEDIA
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
