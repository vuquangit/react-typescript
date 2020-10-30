import styled from 'styled-components'
import { prop } from 'styled-tools'

import { ILoadingProps } from './Loading.types'

export const LoadingWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const LoadingContent = styled('div')<ILoadingProps>`
  animation: load5 1.1s infinite ease;
  border-radius: 50%;
  font-size: 25px;
  margin: 100px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  height: ${prop('size', '24')}px;
  width: ${prop('size', '24')}px;

  @keyframes load5 {
    0%,
    100% {
      box-shadow: 0 -2.6em 0 0 #8cc8ff,
        1.8em -1.8em 0 0 rgba(140, 200, 255, 0.2),
        2.5em 0 0 0 rgba(140, 200, 255, 0.2),
        1.75em 1.75em 0 0 rgba(140, 200, 255, 0.2),
        0 2.5em 0 0 rgba(140, 200, 255, 0.2),
        -1.8em 1.8em 0 0 rgba(140, 200, 255, 0.2),
        -2.6em 0 0 0 rgba(140, 200, 255, 0.5),
        -1.8em -1.8em 0 0 rgba(140, 200, 255, 0.7);
    }

    12.5% {
      box-shadow: 0 -2.6em 0 0 rgba(140, 200, 255, 0.7),
        1.8em -1.8em 0 0 #8cc8ff, 2.5em 0 0 0 rgba(140, 200, 255, 0.2),
        1.75em 1.75em 0 0 rgba(140, 200, 255, 0.2),
        0 2.5em 0 0 rgba(140, 200, 255, 0.2),
        -1.8em 1.8em 0 0 rgba(140, 200, 255, 0.2),
        -2.6em 0 0 0 rgba(140, 200, 255, 0.2),
        -1.8em -1.8em 0 0 rgba(140, 200, 255, 0.5);
    }

    25% {
      box-shadow: 0 -2.6em 0 0 rgba(140, 200, 255, 0.5),
        1.8em -1.8em 0 0 rgba(140, 200, 255, 0.7), 2.5em 0 0 0 #8cc8ff,
        1.75em 1.75em 0 0 rgba(140, 200, 255, 0.2),
        0 2.5em 0 0 rgba(140, 200, 255, 0.2),
        -1.8em 1.8em 0 0 rgba(140, 200, 255, 0.2),
        -2.6em 0 0 0 rgba(140, 200, 255, 0.2),
        -1.8em -1.8em 0 0 rgba(140, 200, 255, 0.2);
    }

    37.5% {
      box-shadow: 0 -2.6em 0 0 rgba(140, 200, 255, 0.2),
        1.8em -1.8em 0 0 rgba(140, 200, 255, 0.5),
        2.5em 0 0 0 rgba(140, 200, 255, 0.7), 1.75em 1.75em 0 0 #8cc8ff,
        0 2.5em 0 0 rgba(140, 200, 255, 0.2),
        -1.8em 1.8em 0 0 rgba(140, 200, 255, 0.2),
        -2.6em 0 0 0 rgba(140, 200, 255, 0.2),
        -1.8em -1.8em 0 0 rgba(140, 200, 255, 0.2);
    }

    50% {
      box-shadow: 0 -2.6em 0 0 rgba(140, 200, 255, 0.2),
        1.8em -1.8em 0 0 rgba(140, 200, 255, 0.2),
        2.5em 0 0 0 rgba(140, 200, 255, 0.5),
        1.75em 1.75em 0 0 rgba(140, 200, 255, 0.7), 0 2.5em 0 0 #8cc8ff,
        -1.8em 1.8em 0 0 rgba(140, 200, 255, 0.2),
        -2.6em 0 0 0 rgba(140, 200, 255, 0.2),
        -1.8em -1.8em 0 0 rgba(140, 200, 255, 0.2);
    }

    62.5% {
      box-shadow: 0 -2.6em 0 0 rgba(140, 200, 255, 0.2),
        1.8em -1.8em 0 0 rgba(140, 200, 255, 0.2),
        2.5em 0 0 0 rgba(140, 200, 255, 0.2),
        1.75em 1.75em 0 0 rgba(140, 200, 255, 0.5),
        0 2.5em 0 0 rgba(140, 200, 255, 0.7), -1.8em 1.8em 0 0 #8cc8ff,
        -2.6em 0 0 0 rgba(140, 200, 255, 0.2),
        -1.8em -1.8em 0 0 rgba(140, 200, 255, 0.2);
    }

    75% {
      box-shadow: 0 -2.6em 0 0 rgba(140, 200, 255, 0.2),
        1.8em -1.8em 0 0 rgba(140, 200, 255, 0.2),
        2.5em 0 0 0 rgba(140, 200, 255, 0.2),
        1.75em 1.75em 0 0 rgba(140, 200, 255, 0.2),
        0 2.5em 0 0 rgba(140, 200, 255, 0.5),
        -1.8em 1.8em 0 0 rgba(140, 200, 255, 0.7), -2.6em 0 0 0 #8cc8ff,
        -1.8em -1.8em 0 0 rgba(140, 200, 255, 0.2);
    }

    87.5% {
      box-shadow: 0 -2.6em 0 0 rgba(140, 200, 255, 0.2),
        1.8em -1.8em 0 0 rgba(140, 200, 255, 0.2),
        2.5em 0 0 0 rgba(140, 200, 255, 0.2),
        1.75em 1.75em 0 0 rgba(140, 200, 255, 0.2),
        0 2.5em 0 0 rgba(140, 200, 255, 0.2),
        -1.8em 1.8em 0 0 rgba(140, 200, 255, 0.5),
        -2.6em 0 0 0 rgba(140, 200, 255, 0.7), -1.8em -1.8em 0 0 #8cc8ff;
    }
  }
`
