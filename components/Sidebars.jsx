import Image from 'next/image'
import React from 'react'

export function LeftSidebar() {
  return (
    <div>
      <div className='flex flex-col gap-5 py-10 mx-2 sm:gap-20'>
        <Image src="/skzoo/dwakei.png" alt="dwaeki" height={200} width={200} className='rotate-30'/>
        <Image src="/skzoo/foxin.png" alt="dwaeki" height={200} width={200} className='-rotate-20'/>
        <Image src="/skzoo/Hyunjin.png" alt="dwaeki" height={200} width={200} className='rotate-45' />
        <Image src="/skzoo/puppym.png" alt="dwaeki" height={200} width={200} className='-rotate-20'/>
      </div>
    </div>
  );
}

export function RightSideBar(){
    return (
      <div>
        <div className="flex flex-col gap-5 py-10 mx-2 sm:gap-20">
          <Image
            src="/skzoo/leebit.png"
            alt="dwaeki"
            height={200}
            width={200}
            className="-rotate-30"
          />
          <Image
            src="/skzoo/quokka.jpg"
            alt="dwaeki"
            height={200}
            width={200}
            className="rotate-20"
          />
          <Image
            src="/skzoo/bbokari.jpg"
            alt="dwaeki"
            height={200}
            width={200}
            className="-rotate-45"
          />
          <Image
            src="/skzoo/wolfchan.jpg"
            alt="dwaeki"
            height={80}
            width={80}
          />
        </div>
      </div>
    );
}
