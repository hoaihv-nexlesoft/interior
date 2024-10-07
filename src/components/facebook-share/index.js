'use client'
import { Button } from '@radix-ui/themes';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
const FacebookShareButton = ({ url, text }) => {
  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  return (
    <Button color="gray" variant='outline' onClick={shareToFacebook}>
      Share: <FaFacebook />
    </Button>
  );
};

export default FacebookShareButton;