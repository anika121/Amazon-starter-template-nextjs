import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon</title>
      </Head>\
      <center className="grid mt-10 place-items-center">
        <h1 className="text-5xl">Lets build Amazon 2.0</h1>
        <h2>This is your starter template!</h2>
        <br />
        <h3 className="font-bold">
          We will be using Next.js / Tailwind CSS / Redux / Firebase / NextAuth
        </h3>
        <i>(Dont worry, its all setup and ready to use!)</i>
        <h4>Get Ready, Get Set, GO!!!</h4>

        <h5 className="mb-10">#PAPAFAM</h5>

        <div className="p-10 bg-red-300">
          <p className="font-bold">
            Dont forget to register for the challenge here!
          </p>
          <p>👇👇👇</p>
          <a
            href="https://www.papareact.com/secret-challenge"
            className="p-3 font-bold text-blue-400 underline"
          >
            CLICK HERE TO REGISTER NOW
          </a>
        </div>

        <p className="mt-24">Built with 💙 by Sonny Sangha (PAPA REACT)</p>
      </center>
      {/* ---- ---- */}
    </div>
  );
}
