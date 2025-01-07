import React, { useState } from "react";
import Sidebar from "../components/dashboard/sidebar/Sidebar";
import { Link, Outlet } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { IoCode } from "react-icons/io5";
const DashboardLayout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col bg-darkText dark:bg-darkBg">
      {/* Navbar */}
      <div className="flex bg-darkText dark:border-black dark:bg-darkBg border-b justify-between py-4 px-6 fixed top-0 w-full h-[64px]  z-10 shadow-sm">
        <div
          className={`flex justify-between items-center gap-2 ${
            toggle ? "w-[55px]" : "w-[224px]"
          }  `}
        >
          <Link to="/" className={` ${toggle ? "hidden" : "flex"}`}>
            Quick Drop
          </Link>
          <span onClick={() => setToggle(!toggle)}>
            <IoCode className="text-[22px]" />
          </span>
        </div>
        <p>
          <FiUser size={26} />
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 pt-[64px]">
        <div>
          <Sidebar toggle={toggle} />
        </div>

        <div
          className={`${
            toggle ? "ml-[80px]" : "ml-[80px] md:ml-[100px] lg:ml-[250px]"
          } flex-1 overflow-y-auto  bg-darkText dark:bg-darkBg
           p-6 `}
          style={{ height: "calc(100vh - 64px)" }}
        >
          {/* <Outlet /> */}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          doloremque facilis eligendi dicta numquam doloribus modi, sunt optio
          accusamus fugit deserunt magnam aut exercitationem perferendis ducimus
          dolor debitis eveniet unde iure odit ut inventore. Accusamus nesciunt,
          facilis dolorem fuga cupiditate quas sed itaque aut iusto velit in
          rerum dolores quis, laboriosam maiores optio enim tempore nulla ut
          deleniti. Quasi, est quia? Laudantium nisi numquam accusantium placeat
          praesentium vitae voluptas laboriosam nemo ipsa odit tempora, aliquid
          deleniti sapiente quasi unde quam et quidem officiis. Molestias,
          corporis. Error in, quis laboriosam commodi exercitationem
          necessitatibus suscipit, impedit eum omnis ut provident quasi sit?
          Sint laboriosam dicta, porro ad labore laborum nisi hic facilis vero
          earum quidem eum iusto tempora eaque! Optio pariatur ut, fugiat
          recusandae molestiae ex deleniti non amet fugit veritatis, vitae velit
          quis! Illum commodi ut blanditiis esse porro aut asperiores atque,
          dolor accusamus nesciunt deleniti soluta earum beatae sapiente dolorum
          laboriosam dicta vel saepe molestiae. Minima impedit aspernatur porro!
          Autem, assumenda! Aliquam pariatur quae possimus nemo, suscipit,
          perspiciatis ea officia at delectus numquam cupiditate amet illo
          commodi iste non, perferendis quas distinctio quos corrupti sed?
          Ducimus harum, laudantium ipsam accusamus fugit repellendus? Fugit ex
          vero dolor nisi repellendus. Amet at nemo eum laboriosam nisi, ipsa
          optio, est saepe temporibus rem soluta perferendis, repudiandae quos
          eos ducimus debitis dolores! Earum voluptatum hic beatae neque
          inventore totam aperiam atque dolores debitis laudantium itaque, quia
          recusandae cumque quam vero temporibus est animi sit ad, repudiandae
          unde et eum asperiores. Ipsum accusantium obcaecati at minus?
          Consequuntur totam, commodi voluptatem delectus incidunt ut tempora
          sunt dolor necessitatibus impedit molestiae, numquam dicta suscipit
          ipsa voluptates, aliquid reprehenderit praesentium? Adipisci,
          dignissimos. At repudiandae fugit qui reiciendis, doloremque, illum
          aut temporibus nisi maiores odio aliquid ab mollitia sed nostrum
          voluptate officiis. Inventore quidem at nam quibusdam quisquam nihil
          obcaecati corporis error aut cum consequatur, veritatis ullam officiis
          maiores debitis autem magni dolor expedita numquam qui repellendus.
          Quo repellendus corrupti natus at, minus, laboriosam vitae porro in
          beatae itaque, quaerat ab? Cum rem consectetur illo cumque! Eum
          aliquam consequuntur a maiores tempora possimus deserunt enim, nam
          cumque obcaecati quidem vel veniam non ducimus vitae itaque neque
          architecto quaerat dolor corrupti, provident accusantium! Ab delectus
          tempora expedita magnam. Sequi nihil magni illum, minus labore eum
          pariatur consequuntur voluptate incidunt ex impedit qui enim sit
          quisquam, quas commodi est repellendus debitis ipsa modi dolorem eaque
          odio repellat. Nostrum suscipit neque molestias quibusdam reiciendis
          ad. Ut est sit laudantium quos doloribus, esse cumque quod deserunt
          quo. Facere quis perferendis, culpa quod, nisi quisquam quasi aut qui
          molestiae dicta distinctio consequatur ratione voluptates natus iure.
          Voluptate beatae recusandae ex, delectus reprehenderit ducimus sed
          deserunt vel consectetur iure mollitia distinctio excepturi magnam
          commodi nisi earum tenetur fuga veniam ullam pariatur provident
          accusamus! Numquam, tempore iusto nihil unde, nostrum magni quibusdam
          odit placeat vero quod aut nisi quos accusamus, non ut nemo. Quia
          nihil quam dolor ducimus eaque perferendis ea quas labore vero id
          minus, doloremque obcaecati odit eum facere voluptate fugit tempora,
          repellat consequatur alias ex dolorem dolorum. Incidunt cumque
          corporis commodi, sapiente laudantium sunt explicabo doloribus.
          Mollitia est neque itaque a veritatis odio dolorum sequi, ducimus
          asperiores debitis id quia error, eligendi doloribus amet illo magnam
          hic aliquam laborum consequatur impedit, odit ea quidem corporis?
          Aliquid aspernatur voluptatibus, esse earum facilis obcaecati debitis
          iusto mollitia! Illum quo veniam in consequatur vero aliquam. Dolorum
          totam esse officiis officia nobis aut. Dolorum nam facilis dignissimos
          numquam quia? Enim reiciendis esse consequuntur est. Illum modi non
          quis exercitationem dolorem. Alias ducimus veniam odit cum earum
          similique doloribus, nihil quae, ab officia maiores, autem vitae
          nostrum doloremque dolorem. Impedit maiores dolores laborum nostrum
          ipsum incidunt quo quod pariatur. Eos quae et beatae magni aperiam
          tempore omnis dolores quasi inventore optio id, at molestias ducimus!
          Mollitia qui dolor neque, sequi dolore sed aliquam ipsa culpa eveniet
          architecto nisi laborum tenetur fugit magnam officia cumque suscipit
          illum veniam quis. Illo, exercitationem nisi? Aliquam consequuntur
          minima nam sed tempora, optio architecto iste libero eveniet quas
          fugit earum natus autem nesciunt aut officiis aliquid possimus
          adipisci. Aliquid, sit laboriosam. Accusamus nihil eligendi, et, quod
          delectus in doloremque nemo atque quia sapiente vel. Asperiores in
          vero debitis architecto eveniet voluptatibus quo sequi, necessitatibus
          aut itaque maxime eaque corporis amet blanditiis molestias reiciendis
          accusantium eos quia ab facere, optio inventore ratione? Ipsam
          dignissimos ipsa, quaerat voluptas vitae nisi eligendi, reprehenderit
          nulla magni placeat ut suscipit iste autem reiciendis vero eveniet
          possimus fugit eius ea, illo alias quam. Debitis, consectetur ut?
          Ducimus porro modi et, laboriosam veritatis rem nulla culpa impedit
          nostrum, pariatur architecto alias mollitia, asperiores inventore
          officiis dignissimos debitis cum molestiae? Nesciunt officiis esse
          illo aliquam temporibus. Numquam incidunt impedit iste inventore fuga
          libero, soluta autem iusto omnis aut eaque, dignissimos quae corrupti
          necessitatibus! Inventore minus magnam modi temporibus doloribus?
          Laboriosam laudantium quos saepe vero incidunt reiciendis ea obcaecati
          consectetur dignissimos aliquid ullam quisquam eius possimus, nam
          magni minima? Repellat tenetur adipisci dolor error alias id placeat
          praesentium minima voluptatem consequatur, nam sunt vel quas? Officiis
          non pariatur architecto itaque necessitatibus. Praesentium fugit ipsam
          id, modi temporibus, autem dolorem ratione eius ut hic iste tempore
          mollitia eum quos saepe nulla aliquid non omnis qui incidunt! Laborum,
          reprehenderit non. Eum alias ut quo ipsam itaque dicta nulla!
          Obcaecati fugiat voluptatibus rem error earum porro quasi illo
          corrupti, repudiandae sapiente aperiam inventore, debitis aspernatur
          molestiae. Dolore fugiat eveniet repellendus id, vitae corporis
          tenetur esse repellat asperiores blanditiis illo, dolorum
          necessitatibus. Officia laudantium distinctio vel magni qui,
          repellendus soluta libero quaerat in quo architecto mollitia impedit
          minus doloremque praesentium debitis blanditiis repudiandae eaque
          quae, eum, quam nam. Repellat quod, nobis perspiciatis numquam autem
          architecto impedit delectus ad fugiat maiores sequi, consequuntur
          dolor cumque soluta similique quae rem iste cum suscipit. Aliquam id
          maxime dicta ratione modi recusandae unde ipsa magni natus quod
          expedita debitis sapiente quibusdam impedit rem fugit aperiam
          repellendus, minima nobis dolor possimus deserunt. Odio rerum
          similique doloremque corporis perferendis harum sit. Saepe rem eum
          maiores cupiditate perspiciatis reprehenderit quisquam quas tempore
          excepturi. Fuga blanditiis aliquam voluptate et, molestiae cumque
          maxime, inventore enim id laboriosam repudiandae autem? Rem, suscipit
          vel reprehenderit assumenda eaque nobis ex? Dolorum, expedita? Nam
          saepe iusto officiis in laborum placeat laudantium. Tenetur accusamus,
          eaque delectus dolor debitis aut quaerat dolorum autem obcaecati
          deserunt dolore, provident, rerum ad temporibus repudiandae quisquam
          id. Aliquid ullam animi unde natus sequi dolores voluptatibus
          perspiciatis, molestias eligendi minus possimus obcaecati sit corporis
          necessitatibus, quidem deserunt. Sed, sit temporibus nemo quisquam in
          aspernatur quod consequatur dolores magni. Ad neque reprehenderit
          adipisci fuga nemo quisquam, soluta, praesentium doloremque magnam
          consequuntur a natus libero ipsum nihil labore rem accusamus! Laborum
          explicabo a vitae temporibus, omnis error doloremque adipisci dicta
          perferendis vel numquam eum nobis reiciendis nihil magnam, labore
          voluptas veniam molestiae tempore? Voluptas nihil repudiandae sed.
          Fugiat veniam, quae et earum, laboriosam eaque quia laborum sunt enim
          explicabo animi ab aliquid aliquam totam ea temporibus facilis vel non
          nemo quod, unde magnam velit ipsam assumenda! Veritatis at repellat
          modi id hic ea fugiat nemo sint itaque unde voluptatum atque tempora
          vel architecto dignissimos, perferendis magnam dolorem blanditiis
          explicabo, numquam accusantium sunt fuga eius iste! Quo sed ducimus
          accusantium assumenda tenetur numquam debitis natus quam enim fugit
          consectetur nihil, iure obcaecati molestias magnam eius illo voluptate
          ratione, non, saepe voluptates veniam cupiditate cum repellendus!
          Ullam illum quia velit, aperiam sunt placeat facilis deleniti quis
          facere animi! Voluptatibus dolore atque velit aliquam magni molestias
          accusamus beatae ipsa! Amet quas neque harum natus qui officiis
          architecto veniam assumenda ipsam tempore exercitationem dignissimos,
          dolore molestiae, sint labore iusto obcaecati vero libero officia
          eaque. Commodi dolor in totam quaerat. Tempora iure, consequuntur
          porro fugiat quas ullam sed vitae obcaecati facilis illo nobis
          recusandae beatae doloribus in nihil fuga culpa maiores a laboriosam
          velit possimus ipsam doloremque dolorem. In accusantium odio laborum
          explicabo alias qui provident nostrum iure incidunt tenetur repellat
          voluptates quod quos expedita, quaerat aliquid delectus temporibus
          sapiente libero sint dolor maxime quidem harum. Explicabo iusto rem
          laboriosam reiciendis assumenda consequuntur hic, voluptatum at unde
          nulla? Accusamus vero ratione rerum deserunt! Ut necessitatibus
          voluptate placeat, pariatur harum natus voluptas at. Nobis, alias
          ratione omnis quasi libero optio veritatis iste beatae quam debitis
          earum placeat soluta molestiae aut enim nostrum in mollitia sint
          consequatur. Eveniet reiciendis eum neque amet illum rem accusantium
          porro tenetur quae harum. Illo, soluta harum voluptate provident autem
          dolorum deserunt ut ex recusandae id quis optio maxime neque alias
          eaque quas omnis, distinctio enim nulla! Laudantium sint blanditiis
          aperiam cupiditate optio sequi alias nobis illo minus autem iure
          officia, cumque at modi numquam in illum debitis odit suscipit
          quibusdam eveniet asperiores quam beatae! Neque veniam fugit fuga
          tempora molestias mollitia et, praesentium eos quisquam, dolores
          beatae laudantium atque perspiciatis obcaecati reiciendis maxime.
          Omnis quod laudantium culpa sapiente, animi ea minima mollitia
          reiciendis molestias esse sequi officiis enim recusandae quisquam,
          obcaecati et voluptate, voluptatibus debitis molestiae dolores
          accusamus quidem? Quae, quisquam impedit. Cumque quisquam, repellat
          nesciunt vitae delectus quaerat porro hic natus, laboriosam a
          voluptatum magni voluptates quod velit quia alias eaque aut? Voluptate
          tenetur accusamus impedit incidunt vero natus minus amet nisi deleniti
          sunt quisquam beatae quas recusandae molestias, suscipit aperiam,
          obcaecati placeat doloremque odio deserunt eaque quam soluta.
          Molestias porro soluta tenetur eligendi culpa quo maxime incidunt id
          eaque autem? Quibusdam ipsa, aperiam dolore provident dignissimos
          ipsum est saepe tempora veritatis aut, delectus nulla sint facere
          commodi quasi accusantium a optio repellendus quo animi obcaecati
          magni quidem, pariatur vel! Consequatur maxime, animi nulla error et
          excepturi asperiores! Ea eveniet necessitatibus reprehenderit! Quis
          incidunt laudantium maiores perferendis dolores ad iste reprehenderit
          doloribus hic minima a repellat magnam numquam atque voluptatem
          molestiae dolorum quo odio enim unde eligendi, consectetur sit
          dignissimos ex. Tempore pariatur exercitationem natus praesentium amet
          velit voluptates libero ut earum aspernatur, ipsa deserunt illo
          eligendi neque. Velit iusto rem minima nesciunt dolore eius delectus
          obcaecati quam totam possimus laudantium pariatur quaerat officiis,
          iure voluptatum, deleniti debitis culpa. Ducimus ad quam beatae
          excepturi ex laboriosam, numquam quaerat perspiciatis maxime expedita
          non tenetur, perferendis vero natus quis. Veritatis ratione modi
          nostrum molestiae beatae deleniti sunt cumque fugiat sint, corrupti,
          nihil natus similique iusto blanditiis inventore mollitia
          reprehenderit veniam quam facilis doloremque iste eveniet laboriosam!
          Molestias corrupti voluptates iste numquam? Deleniti adipisci
          necessitatibus quae nisi et. Consectetur, et? Suscipit quisquam sequi
          quidem quaerat, nemo exercitationem? Sint repellat saepe incidunt,
          labore sequi illo odio porro! Dolorum, alias modi ut nesciunt odit
          sunt quae. In itaque dolores debitis ratione libero reprehenderit
          quisquam omnis aliquid nulla ad, commodi consequatur recusandae minima
          maxime saepe quia necessitatibus aliquam odit laudantium reiciendis
          perspiciatis architecto totam accusantium? Veritatis provident,
          maiores consequatur aperiam aliquid autem quaerat hic consequuntur, ab
          voluptatum, error similique. Dolor cupiditate vero ipsum vel hic
          minima non nesciunt dolores fugit reprehenderit veniam eos mollitia
          maxime natus voluptates est reiciendis atque, sed voluptatum sunt
          pariatur repellendus molestiae! Eveniet repudiandae illo aspernatur,
          ipsum molestias assumenda quam provident enim libero nihil veniam
          laborum doloribus laboriosam voluptatum, aliquid officia modi error.
          Assumenda, quidem dolorum incidunt explicabo reiciendis aliquam minus
          qui provident magnam ipsa dicta in fuga molestias fugit, ut et quos
          accusamus magni corporis illum unde. Rem, perspiciatis praesentium
          impedit dolor explicabo molestiae, eum saepe minima vel dignissimos
          nesciunt, doloremque quidem fugit reprehenderit sit modi excepturi
          nulla amet alias eos animi blanditiis placeat deserunt. Explicabo iste
          animi, ad vero repellendus cumque asperiores optio alias in quidem
          nesciunt laudantium dolorum? Qui neque vel iure? Laborum ducimus
          asperiores provident voluptate amet magnam enim nisi, tempore dolores
          soluta, eos consequatur? Quidem est quisquam laboriosam reprehenderit
          magni. Fugiat dolor velit consectetur sequi officiis impedit
          voluptatum tempore quam veniam, voluptatem distinctio! Laborum, cumque
          aliquam. Beatae ullam quae repellendus unde eligendi officia. Tempora,
          error deleniti eligendi sint laboriosam ullam excepturi quasi placeat
          amet, odio dolores praesentium distinctio dolore, nemo unde rerum
          aperiam. Maiores incidunt unde similique officiis. A praesentium,
          fugit iure, soluta quae illum, ut consequuntur ab aliquid veniam autem
          in officia earum! Cupiditate ratione beatae, soluta porro autem magnam
          magni repudiandae placeat totam reiciendis ut molestias officiis optio
          itaque, voluptate doloremque assumenda in.
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
