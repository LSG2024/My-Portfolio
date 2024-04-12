import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Profile from "../../components/Profile/Profile";

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
}

const Work = [
  {
    name: "Code 1",
    logo:"/EnsignCollege.png",
    description: "Creating Technology to empower civilians to explore space on their own terms.",
    link: "https://www.robinhood.com/us/en/?utm_source=bing&utm_campaign=437063369&utm_content=1337007746373158&utm_term=__stocks__e&utm_medium=cpc&msclkid=630ee675c42d1d3cc2dd806154203bfb",
  },
  {
    name: "Code 2",
    logo:"/EnsignCollege.png",
    description: "Creating Technology to empower civilians to explore space on their own terms.",
    link: "https://www.bluenile.com/diamond-search?mktg_src_id=333001056495283&ds_k=kwd-73392760377312:loc-190&device=c&matchtype=e&cq_net=o&msclkid=7a3f402c343b1fcac54a2638a459368c",
  },
  {
    name: "Code 3",
    logo:"/EnsignCollege.png",
    description: "Creating Technology to empower civilians to explore space on their own terms.",
    link: "https://www.amazon.com/?tag=hymsabk-20&ref=pd_sl_290dlthsvm_e&adgrpid=1341404752168026&hvadid=83837868333246&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=95446&hvtargid=kwd-83838147155260:loc-190&hydadcr=28884_11845483",
  },
  {
    name: "Code 4",
    logo:"/EnsignCollege.png",
    description: "Creating Technology to empower civilians to explore space on their own terms.",
    link: "https://www.brilliantearth.com/jewelry/?nbt=nb%3Amicrosoft%3Ao%3A376782215%3A1231453367680214%3A76966003048501&nb_mt=p&nb_bmt=bp&nb_oii=76966100829461&nb_qs=jewelry&nb_fii=&nb_li_ms=&nb_lp_ms=95446&nb_pi=&nb_pc=&nb_ci=&msclkid=460b88010b571b86cf05ee159bcdf481&utm_source=bing&utm_medium=cpc&utm_campaign=SEM%20%7C%20Search%20%7C%20US%20%7C%20HR&utm_term=jewellry%20store&utm_content=Store%20%7C%20Jewelry%20Store",
  },
  {
    name: "Code 5",
    logo:"/EnsignCollege.png",
    description: "Creating Technology to empower civilians to explore space on their own terms.",
    link: "https://www.ebay.com/",
  },
  {
    name: "Code 6",
    logo:"/EnsignCollege.png",
    description: "Creating Technology to empower civilians to explore space on their own terms.",
    link: "https://www.coinbase.com/advanced-trade?utm_creative=&utm_device=c&utm_placement=&utm_network=o&utm_location=95446&msclkid=f8e86694ce5f1bc369ac00805e80473c&utm_source=bing&utm_medium=cpc&utm_campaign=rt_p_us_w_m_acq_bin_sea_non_Bitcoin%20Buy%20Terms-T1&utm_term=bitcoin%20investment%20sites&utm_content=Investment-Bitcoin%20Sites",
  },

];

export default function Projects() {
  return (
    <main className="project-display">
      <Profile
        title="My Experience"
        content="I have been working coding for 1 year from now and these are my favorite ones."
      />
      {Work.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          logo ={project.logo}
          description={project.description}
          link={project.link}
        />
      ))}
    </main>
  );
}
