import React, { useEffect } from 'react';

import * as S from './styled';

function ScrollIndicator() {
  useEffect(() => {
    window.addEventListener('scroll', moveScrollIndicator);

    const scrollIndicatorElt = document.getElementById('scrollIndicator');

    const maxHeight = window.document.body.scrollHeight - window.innerHeight;

    function moveScrollIndicator(e) {
      const percentage = (window.scrollY / maxHeight) * 100;
      scrollIndicatorElt.style.width = percentage + '%';
    }
  }, []);

  return (
    <S.Indicator id="scrollIndicator" />
  );
}

export default ScrollIndicator;