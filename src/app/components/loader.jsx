import React from 'react'
import Lottie from 'lottie-react'
import anim from '../assets/anim.json'

export default function Loader() {
  return (
    <Lottie animationData={anim} />
  )
}
