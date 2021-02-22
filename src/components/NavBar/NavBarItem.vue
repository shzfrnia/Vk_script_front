<template>
  <router-link
    :class="[{ 'disabled-link': !accountIsSet }]"
    class="link"
    :to="{ name: to, query: { link: accountLink, days_offline: daysOffline } }"
  >
    <my-badge
      :value="badgeValue"
      :show="accountIsSet"
      :class="[{ 'disabled-link': !accountIsSet }]"
    >
      <div class="my-btn">
        <avatar v-if="isAccountLink && accountIsSet" :url="accountAvaLink" />
        <i v-else :style="{ color: iconColor }" class="icon" :class="icon" />
        <span v-show="accountIsSet" class="label">
          {{ label }}
        </span>
      </div>
    </my-badge>
  </router-link>
</template>

<script>
import MyBadge from "../MyBadge/MyBadge";
import Avatar from "./Avatar";

export default {
  name: "NavBarItem",
  components: {
    MyBadge,
    Avatar,
  },
  props: {
    accountName: {
      type: String,
      required: false,
    },
    accountAvaLink: {
      type: String,
      required: false,
    },
    isAccountLink: {
      type: Boolean,
      default: false,
    },
    accountIsSet: {
      type: Boolean,
      required: true,
    },
    badgeValue: {
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    accountLink: {
      required: true,
    },
    daysOffline: {
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    iconColor: {
      type: String,
      default: "red",
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.link {
  text-decoration: none !important;
  min-width: 50px;
  max-width: 50px;
  transition: 1.5s max-width cubic-bezier(0, 1.21, 0.58, 1);
  margin: 0 5px 0 5px;
}

.link.router-link-exact-active {
  transition: 1s linear;
  max-width: 500px;
}

.label {
  opacity: 0;
  position: relative;
  padding-left: 40px;
  transition: 0.5s opacity ease-in-out;
  text-align: center;
  white-space: nowrap;
}

.router-link-exact-active .label {
  opacity: 1;
}

.my-btn {
  cursor: pointer;
  height: 50px;
  overflow: hidden;
  padding: 0 10px;
  font-size: 25px;
  border-radius: 25px;
  text-align: center;
  background-color: white;
  line-height: 50px;
}

.disabled-link {
  pointer-events: none;
}

.disabled-link i {
  color: gray !important;
}

.icon {
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translate(-50%, -50%);
  display: inline;
}
</style>
