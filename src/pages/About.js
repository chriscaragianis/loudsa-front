import React from 'react';
import Image from '../Image';
import Lorem from '../lorem';

const About = () => (
  <div className="page about-page">
    <div className="copy about-copy">
      <h1>About us</h1>
      <span>
        <p>
          Louisville DSA is the local chapter of the Democratic Socialists of America, representing the Louisville metropolitan area. We are committed to organizing together to build a socialist presence in Kentucky and Indiana. Our chapter was founded as an organizing committee with five members in late 2016 and has quickly grown to more than 125 members.  The chapter hosts a variety of events each month, including organizing meetings, social events, community events, town halls, and more. Louisville DSA is committed to working with progressive and socialist organizations to create positive change, challenge those in power, and build a lasting base for socialism in our region.
        </p>
        <p>
          The Democratic Socialists of America (DSA) is the largest socialist organization in the United States, having been founded in 1982 as a merger of the Democratic Socialist Organizing Committee and the New American Movement. DSA is a 501(c)4 political organization, not a political party, and our members have run for office as Socialists, Greens, Democrats, Independents, and more. DSA is a big tent organization that welcomes a variety of socialists, anarchists, communists, and other leftists of many ideological tendencies. DSA has over 32,000 members nationally and has grown substantially since 2016 following the Bernie Sanders campaign for President. Approximately 35 DSA members hold elected office nationwide, and DSA-endorsed candidates won elections in 2017 from Pennsylvania to Virginia to North Dakota.
        </p>
        <p>
          The Louisville chapter of DSA has worked in coalition with organizations fighting for racial justice, reproductive rights, LGBTQ rights, immigrant rights, and more. We are an active supporter of workers’ rights and have active members who are involved in labor unions. Our socialism is feminist, anti-racist, and intersectional, and we believe that all struggles are intimately linked together. Louisville DSA is committed to anti-capitalism as a core value and wishes to see a full transition to a socialist economy which is democratically controlled by the workers. We pursue these goals by campaigning for affordable housing, Medicare for All, criminal justice reform, protections for undocumented immigrants, and candidates we have endorsed. We employ a diversity of tactics including electoral politics, community base building, direct action, mutual aid, and labor organizing. We hope you will join us in our fight to make Louisville and the world a better place for all people.
        </p>
      </span>
    </div>
    <div className="image-strip">
      <Image src="about1.jpg" caption="Louisville DSA members rallying against the Dakota Access Pipeline" />
      <Image src="about2.png" caption="A caption for the picture" />
      <Image src="about3.jpg" caption="A caption for the picture" />
    </div>
  </div>
);

export default About;
