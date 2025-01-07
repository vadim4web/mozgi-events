<template>
  <menu
    class="router-links"
    :class="{
      open: menuOpen,
      closed: !menuOpen,
      mobile: isMobile,
      notMobile: !isMobile,
    }"
  >
    <button @click="toggleMenu" class="button">
      <div
        class="lines"
        :class="{ open: menuOpen }"
        style="width: 22px; height: 34px; position: relative"
      >
        <div class="line line1" />
        <div class="line line2" />
      </div>
    </button>
    <li>
      <router-link @click="closeMenu" class="link home logo" to="/">
        <svg
          width="85"
          height="46"
          viewBox="0 0 85 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id="shadowShape"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="0.25"
                flood-color="#000"
                flood-opacity="1"
              />
            </filter>
          </defs>
          <path
            id="logoPath"
            filter="url(#shadowShape)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.1881 6.12368L37.1967 4.76944V32.3073L29.1881 30.9529V6.12368ZM25.7709 2.70864V34.3682L40.6138 37.0767V0L25.7709 2.70864ZM69.2349 18.1975V21.6108H73.8769V30.9366H65.4666V6.12038H72.6661V11.1968H76.0816V2.7072H62.0511V34.3498H77.2924V18.1975H69.2349ZM11.6071 28.088L11.6259 28.1724C13.5022 19.6456 15.3722 11.1529 17.2328 2.70721H22.3529V34.3496H18.9376V9.63353C18.8876 9.63353 13.2524 34.3656 13.2524 34.3656H9.96191C9.96191 34.3656 4.3267 9.63353 4.27684 9.63353V34.3496H0.861328V2.70721H5.98131C7.8421 11.1529 9.71227 19.6456 11.5885 28.1724C11.5948 28.1442 11.6007 28.1161 11.6071 28.088ZM54.9259 6.12045H44.4379V2.70727H58.6289V6.12045L48.1405 30.9365H58.6289V34.3498H44.4379V30.9365L54.9259 6.12045ZM84.1299 34.35H80.7142V2.7074H84.1299V34.35ZM30.9617 45.9999V45.4751H28.2521V43.8936H30.353V43.3689H28.2521V41.9542H30.8591V41.4293H27.6754V45.9999H30.9617ZM33.6423 41.4292H34.251L35.4999 45.4108H35.8204L37.0694 41.4292H37.6652L36.2045 45.9999H35.1027L33.6423 41.4292ZM43.9078 45.9999V45.4751H41.1982V43.8936H43.2995V43.3689H41.1982V41.9542H43.8055V41.4293H40.6218V45.9999H43.9078ZM50.7845 41.4292V45.9999H49.8749L47.7484 42.1782H47.6071V45.9999H47.0437V41.4292H47.9533L50.0798 45.251H50.2207V41.4292H50.7845ZM55.8168 41.9416H57.3159V41.4292H53.7286V41.9416H55.24V46H55.8168V41.9416Z"
            stroke="var(--black)"
            stroke-width="0.25"
          />
        </svg>
      </router-link>
    </li>
    <li>
      <router-link @click="closeMenu" class="link where" to="/where"
        >{{ $t('where') }} ?</router-link
      >
    </li>
    <li>
      <router-link @click="closeMenu" class="link who" to="/who"
        >{{ $t('who') }} ?</router-link
      >
    </li>
    <li>
      <router-link @click="closeMenu" class="link what" to="/what"
        >{{ $t('what') }} ?</router-link
      >
    </li>
  </menu>
</template>

<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'

const isMobile = useMediaQuery('(max-width: 767px)')
const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)
</script>

<style lang="scss" scoped>
@keyframes fillOut {
  from {
    fill: transparent;
  }
  to {
    fill: var(--black);
  }
}

@-webkit-keyframes fillOut {
  from {
    fill: transparent;
  }
  to {
    fill: var(--black);
  }
}

.router-links {
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  padding: 16px;

  .link {
    position: absolute;
    width: max-content;
  }

  &.mobile {
    &.closed {
      width: 0;
      height: 0;

      .link {
        display: none;
      }
    }

    &.open {
      width: 100vw;
      height: 100vh;
      background: var(--grey);
    }

    .button {
      position: absolute;
      top: 0;
      right: 0;
      padding: 16px;
    }

    .lines {
      .line {
        position: absolute;
        left: 0;
        top: 13px;
        width: 22px;
        height: 1.5px;
        background: var(--black);
        -webkit-transform: rotate 0.5s, scaleX 0.5s, top 0.5s;
        transform: rotate 0.5s, scaleX 0.5s, top 0.5s;

        &.line1 {
          top: 13px;
        }

        &.line2 {
          top: 22px;
        }
      }

      &.open {
        .line {
          -webkit-transform-origin: 0;
          transform-origin: 0;
          height: 1px;
        }

        .line1 {
          -webkit-transform: rotate(45deg) scaleX(1.4);
          transform: rotate(45deg) scaleX(1.4);
          top: 6px;
        }
        .line2 {
          -webkit-transform: rotate(-45deg) scaleX(1.4);
          transform: rotate(-45deg) scaleX(1.4);
          top: 28px;
        }
      }
    }

    .link {
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }

    .link.home {
      width: 5rem;

      @media (orientation: portrait) {
        top: 33.3vh;
      }

      @media (orientation: landscape) {
        top: 28vh;
      }

      &:hover svg {
        -webkit-animation: fillOut 0.5s linear forwards;
        -moz-animation: fillOut 0.5s linear forwards;
        -o-animation: fillOut 0.5s linear forwards;
        animation: fillOut 0.5s linear forwards;
      }
    }
    .link.where {
      top: 45vh;
    }
    .link.who {
      top: 55vh;
    }
    .link.what {
      top: 65vh;
    }
  }

  &.notMobile {
    width: 0;
    height: 0;

    .link {
      right: 0;
    }

    .home {
      display: none;
    }

    .link.home {
      top: 30vh;
    }
    .link.where {
      top: 50vh;
      right: calc(100vw - 64px - var(--router-links-offset));
      -webkit-transform: rotate(-90deg);
      transform: rotate(-90deg);
    }
    .link.who {
      top: calc(100vh - 16px - var(--router-links-offset) * 2);
      -webkit-transform: rotate(180deg) translateX(-50%);
      transform: rotate(180deg) translateX(-50%);
      right: 50vw;
    }

    .link.what {
      right: calc(var(--router-links-offset) * 2 - 32px);
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      top: 50vh;
    }
  }
}
</style>
