import React from "react";
import Navbar from "../Navbar/Navbar";
import SlidingBg from "./SlidingBg";

function HomePage() {
  return (
    <div>
      <Navbar />
      <SlidingBg />
      {/* middle section  */}
      <div className=" absolute w-full h-screen bg-black opacity-45"></div>
      <div className=" relative z-30 text-2xl font-mono font-medium text-white flex justify-center items-center w-full h-screen">
        <h2 className=" bg-black p-3 rounded-3xl hover:bg-slate-700 hover:ring-2 hover:ring-blue-600">create post</h2>
      </div>
      <div className=" bg-white relative">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        asperiores nobis fugiat itaque blanditiis quas ad, dignissimos placeat
        nisi ex tenetur quasi est qui distinctio eveniet molestiae totam omnis
        officiis nulla voluptatem perferendis architecto ratione hic. Qui
        laborum dignissimos adipisci necessitatibus voluptatibus hic molestiae,
        id iste ipsam at eaque illum dolores odio vero. Nesciunt omnis
        cupiditate atque in autem ex tempore exercitationem, explicabo unde vel
        hic laboriosam sint qui! Officiis magni, quas ipsam quibusdam sit ab ea
        nemo blanditiis. Neque nihil quaerat cupiditate molestias quam iure
        aspernatur a tenetur nostrum commodi. A asperiores minus deserunt,
        aliquid hic porro similique soluta nobis quisquam tempora veritatis
        atque recusandae. Laboriosam, exercitationem excepturi impedit maxime
        atque neque magnam mollitia architecto harum dicta, eligendi incidunt
        aut voluptatibus distinctio, optio dignissimos voluptatum in. Esse,
        suscipit maiores dicta quidem praesentium debitis dignissimos, quam fuga
        nihil animi in assumenda magnam facere placeat dolorum exercitationem
        neque excepturi quibusdam quo enim. Quisquam officiis laborum cum id
        praesentium eligendi omnis distinctio quia aut nisi minus, a labore,
        accusantium sequi. Doloremque voluptate blanditiis, cumque temporibus
        labore repellendus repellat delectus mollitia eaque vitae iste eum
        reprehenderit iusto voluptas ex recusandae sapiente facilis. Dolor
        corporis odit perferendis, officia distinctio aliquid. Facere esse hic
        quo?
      </div>
    </div>
  );
}

export default HomePage;
