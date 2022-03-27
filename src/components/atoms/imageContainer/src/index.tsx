import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  imgURL: StaticImageData | string;
  imgHeight?: string;
  imgWidth?: string;
}

const StyledImageContainer = styled.div`
  overflow: hidden;
  border-radius: 50%;
  /* width: 200px;
  height: 200px; */
  max-width: 200px;
  position: relative;
  span {
    overflow: hidden;
    border-radius: 50%;
  }
`;

export const ImageContainer: React.FC<Props> = (props: Props) => {
  const { imgHeight = '120', imgWidth = '120', imgURL } = props;
  return (
    <StyledImageContainer>
      <Image
        src={imgURL}
        alt="profile_image"
        title="profile_image"
        // height={imgHeight}
        // width={imgWidth}
        layout="responsive"
        objectFit="cover"
      />
    </StyledImageContainer>
  );
};

export default ImageContainer;
