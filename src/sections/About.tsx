import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";

import JavascriptIcon from '@/assets/icons/square-js.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'

const toolboxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  }
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
  },
  {
    title: 'Pizza Making',
    emoji: '🍕',
  },
  {
    title: 'Photography',
    emoji: '📷',
  },
  {
    title: 'Biking',
    emoji: '🚵‍♂️',
  },
  {
    title: 'Watching Movies',
    emoji: '🎦',
  },
];


export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader eyebrow="About Me" title="My world" description="hello" />

      <div>

        {/* Book */}
        <Card>
          <div>
            <StarIcon></StarIcon>
            <h3>My Reads</h3>
            <p>Explore the books</p>
          </div>
          <Image src={bookImage} alt="book cover"></Image>
        </Card>


        {/* Skills */}
        <Card>
          <div>
            <StarIcon></StarIcon>
            <h3>My Skills</h3>
            <p>Explore the technologies I use</p>
          </div>
          <div>
              {toolboxItems.map(item => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
          </div>
        </Card>

        {/* hobbies */}
        <Card>
        <div>
            <StarIcon></StarIcon>
            <h3>My Hobbies</h3>
            <p>Explore my interests beyond the code</p>
          </div>
        </Card>

          {/* map */}
        <Card>
              <Image src={mapImage} alt="map"></Image>
              <Image src={smileMemoji} alt="map"></Image>
        </Card>

      </div>
    </div>
  );
};
