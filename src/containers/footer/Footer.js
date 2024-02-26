import React from 'react'
import FooterList from '../../components/footer_ components/FooterList'

export default function Footer() {
  return (
    <div className='container rounded'>
        <FooterList title="Explore" listItem={["Docs","Figma Plugins","Dashboard Template","Blog post template","Color Game"]}/>
        <FooterList title="Let's connect" listItem={["Contact me","Become a Sponsor","Youtube", "GitHub", "CodePen"]}/>
        
    </div>
  )
}
