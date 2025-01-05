import React, { useState } from "react";
import Sidebar from "../components/dashboard/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { FiUser } from "react-icons/fi";

const DashboardLayout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between py-4 px-6 fixed top-0 w-full  z-10 shadow">
        <div className="flex gap-2">
          <h1>Quick Drop</h1>
          <span onClick={() => setToggle(!toggle)}>XX</span>
        </div>
        <p>
          <FiUser size={26} />
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 pt-[64px]">
        {/* Sidebar */}
        <div
          className={`${
            toggle ? "w-[60px]" : "w-[250px]"
          } bg-gray-100 h-full fixed transition-all duration-300`}
          style={{ top: "64px" }}
        >
          <Sidebar />
        </div>

        {/* Outlet */}
        <div
          className={`${
            toggle ? "ml-[60px]" : "ml-[250px]"
          } flex-1 overflow-y-auto  bg-red-500
           p-6 `}
          style={{ height: "calc(100vh - 64px)" }}
        >
          {/* <Outlet /> */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          quidem tenetur repudiandae sint dolorum. Illo, odio rerum? Laudantium
          totam veritatis fugit, soluta necessitatibus facere rem voluptas
          veniam culpa cum minus exercitationem delectus esse nobis, id atque
          libero, inventore quasi asperiores consequatur! Numquam tenetur
          corrupti, illum blanditiis sequi eius sint! Fugit nemo sed eos ratione
          doloremque assumenda atque odit quisquam esse accusantium. Itaque
          provident voluptatem quidem neque cupiditate autem, assumenda cum a
          rem tempora similique, commodi accusantium, molestiae maiores
          repudiandae tempore quibusdam quae. Eos nam dolor pariatur dolore
          minus vel, officia eius sit sequi doloribus rem a deserunt dignissimos
          voluptate, voluptas laborum, molestias magnam ipsum natus. Beatae
          molestias rerum nostrum expedita accusantium necessitatibus aut
          eligendi repellat soluta totam nihil, quaerat impedit ipsam
          exercitationem provident reprehenderit neque numquam fuga, sint, atque
          non distinctio possimus enim excepturi? Ratione assumenda
          necessitatibus quos maxime libero praesentium rerum quia iste tenetur
          soluta totam excepturi expedita animi pariatur impedit, magnam
          mollitia molestias atque quasi ea quis dolor ipsa. Sequi sapiente
          corporis quod aut accusamus ab adipisci vero commodi quasi nemo,
          architecto, minima perspiciatis rerum ullam. Fuga dolores cum esse
          eligendi quos possimus aliquid nulla vel id, iure et repellat animi.
          Doloremque veniam dolor provident fugit perspiciatis maiores, cum ea
          incidunt sapiente aperiam ut minima deleniti ex nemo assumenda nobis
          id nesciunt voluptates beatae explicabo. Ducimus quo excepturi
          impedit, aperiam harum vitae velit, qui quis nihil, in modi! Rerum,
          vitae praesentium provident excepturi blanditiis maiores repellendus
          ipsum doloribus non! Veniam aliquid commodi molestiae enim soluta
          eveniet, minima dolorem sunt incidunt, in dolores facere doloribus.
          Eum accusantium eveniet iusto at in, ut iure deserunt aliquid tempore,
          nam sed, eaque consequatur omnis nisi? Et consequuntur fugiat
          voluptates ipsum dignissimos accusantium labore hic provident expedita
          iste necessitatibus beatae molestias harum eligendi quibusdam
          perferendis, incidunt doloremque odit esse. Eum nam sit veniam quis
          aut, commodi voluptatum eius est rem atque, quae, aliquid earum velit
          dolorum! Quis aspernatur velit odit error culpa, eum facere illum
          animi nesciunt iusto! Ullam et libero eos numquam odio amet omnis
          velit culpa sequi! Nulla, inventore tempora magnam praesentium quod
          non deleniti quos velit perspiciatis, distinctio est! Earum libero
          possimus ipsa alias impedit vero explicabo animi totam consequatur?
          Asperiores ipsa reiciendis neque voluptatem! Recusandae odio
          distinctio quam officiis fugiat. Voluptates praesentium consequatur
          maxime aliquid vero rem atque amet hic accusantium. Modi magni aperiam
          non sequi reprehenderit quas dicta nulla ipsa id impedit, libero
          maiores nemo, doloremque harum! Maiores nostrum delectus minima illum
          neque, enim aut, architecto laboriosam dolore voluptatibus ab iusto
          temporibus, amet corrupti eveniet facilis nobis illo nam!
          Necessitatibus odit officiis animi libero placeat ipsa nemo reiciendis
          laborum quasi obcaecati dolorem porro facilis, praesentium debitis eos
          omnis quae enim, earum cum adipisci consectetur? Sequi corrupti
          commodi molestiae accusantium ex ullam voluptate reiciendis doloremque
          repellendus quo ratione nostrum veritatis ea sit tempora obcaecati
          odit nulla praesentium eaque et, modi minima? Recusandae possimus
          facilis, autem iure quibusdam veritatis non ducimus sunt pariatur,
          provident nesciunt inventore est hic, iusto maxime tenetur voluptatem
          modi assumenda itaque error aperiam earum! Suscipit sint animi iure
          deserunt necessitatibus nisi similique voluptate tenetur accusamus
          dignissimos dolor excepturi molestias alias, aspernatur voluptatum cum
          distinctio. Repellat fuga officia beatae ipsa nobis exercitationem.
          Modi aut culpa reiciendis enim, tempore ducimus? Debitis, aliquid
          architecto! Et ratione necessitatibus facere vero? Quos, est aliquam
          culpa repellat, temporibus sint laudantium ab odit fugiat quasi
          molestias sed deserunt distinctio ipsam recusandae in voluptates
          sapiente doloribus. Rerum atque perspiciatis non vel quibusdam? Iusto
          in impedit repudiandae nemo iure doloribus distinctio soluta,
          consequuntur, maiores quidem minus quasi deleniti, alias sint qui
          ratione fugit laudantium porro enim? Exercitationem, veritatis omnis!
          Expedita, temporibus sint doloremque quae ipsam, quibusdam,
          perspiciatis nihil nostrum obcaecati pariatur est tenetur quos?
          Voluptatibus soluta magni velit earum harum cupiditate vitae dolores
          et nobis libero ut maiores incidunt facilis dolorum, quasi autem
          deserunt labore animi molestiae. Dolores dolorum vero possimus tenetur
          aperiam praesentium, atque pariatur nam tempore deleniti excepturi
          quam suscipit. Quo nesciunt unde ipsam laudantium ullam dolore sequi
          itaque doloribus a, qui numquam, asperiores quisquam velit ut saepe!
          Minus sequi vel ex sed non facere, maxime aliquid deleniti. Iste
          incidunt cum eius voluptatibus quidem sunt sit atque molestias
          voluptates porro accusamus nesciunt odit voluptatem provident sint
          necessitatibus illum reiciendis, vel ea, quasi amet harum ipsam vitae
          ipsum. Laudantium, culpa. Pariatur doloribus totam voluptates
          similique quae dolor minima vel sunt, deserunt magni? Quisquam illo
          eveniet dignissimos doloribus facilis saepe, maiores asperiores
          aperiam laudantium aspernatur, aliquid minus sequi natus suscipit
          dolor repellendus, sit magni facere et minima! Aspernatur tempora
          debitis cum deserunt tempore vel repudiandae voluptas, optio amet
          perferendis numquam vitae, facilis ut quibusdam soluta corporis rerum
          sit autem totam, temporibus incidunt. Quam suscipit quae corporis vel
          neque nostrum omnis inventore velit natus assumenda rerum sint,
          veritatis ab magnam quos praesentium vero consequatur facere, optio
          enim, hic numquam. Rem numquam animi perspiciatis libero quasi soluta
          non quibusdam maxime a eos quisquam harum, beatae voluptate, dolores
          impedit expedita rerum atque ipsum eum neque ab! Unde quisquam enim
          eveniet impedit placeat repellendus rerum. Veritatis facere molestias
          amet corporis vero ex nulla dolorum quos repudiandae nemo minus,
          molestiae at. Libero eligendi itaque voluptas quod eum asperiores
          consectetur, provident dolor veritatis velit suscipit? Est sint
          deserunt distinctio magnam, doloribus sapiente facere soluta
          praesentium quas molestias dolores recusandae eveniet ea vel deleniti
          laudantium. Quas dolorum molestiae ex commodi rem quod libero
          excepturi voluptatibus natus eligendi repudiandae animi magni, neque,
          eaque maiores ipsa velit consequatur inventore numquam totam ab at ea!
          Itaque totam quisquam laudantium sapiente nam quasi, eos iste
          consectetur nisi dicta sequi voluptates omnis. Harum adipisci sint id.
          Numquam nesciunt atque, dolorem deleniti corporis ratione facilis quam
          reprehenderit? Sit enim, maiores nihil totam, aliquid ad labore
          debitis minus saepe necessitatibus officia a neque quam cumque aut et
          quis laboriosam voluptatibus. Harum inventore repudiandae quaerat
          dolore laudantium minus quo cupiditate, odit nostrum incidunt
          doloribus nihil, aperiam nesciunt eveniet dolores ipsum ipsa expedita
          beatae, aspernatur delectus quia impedit fugit quibusdam repellendus.
          Commodi corporis porro fugit est totam veniam cumque architecto
          accusamus explicabo voluptas expedita iure optio, corrupti deserunt,
          ipsam atque consectetur.
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
