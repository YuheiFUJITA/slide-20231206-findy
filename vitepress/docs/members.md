---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'

const pm = [
  {
    avatar: 'https://github.com/YuheiFUJITA.png',
    name: 'Yuhei FUJITA',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/YuheiFUJITA' },
      { icon: 'twitter', link: 'https://twitter.com/Yuhei_FUJITA' }
    ]
  },
]

const designers = [
  {
    avatar: 'https://github.com/YuheiFUJITA.png',
    name: 'Yuhei FUJITA',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/YuheiFUJITA' },
      { icon: 'twitter', link: 'https://twitter.com/Yuhei_FUJITA' }
    ]
  },
  {
    avatar: 'https://github.com/YuheiFUJITA.png',
    name: 'Yuhei FUJITA',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/YuheiFUJITA' },
      { icon: 'twitter', link: 'https://twitter.com/Yuhei_FUJITA' }
    ]
  },
]

const frontends = [
  {
    avatar: 'https://github.com/YuheiFUJITA.png',
    name: 'Yuhei FUJITA',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/YuheiFUJITA' },
      { icon: 'twitter', link: 'https://twitter.com/Yuhei_FUJITA' }
    ]
  },
  {
    avatar: 'https://github.com/YuheiFUJITA.png',
    name: 'Yuhei FUJITA',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/YuheiFUJITA' },
      { icon: 'twitter', link: 'https://twitter.com/Yuhei_FUJITA' }
    ]
  },
]

const backends = [
  {
    avatar: 'https://github.com/YuheiFUJITA.png',
    name: 'Yuhei FUJITA',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/YuheiFUJITA' },
      { icon: 'twitter', link: 'https://twitter.com/Yuhei_FUJITA' }
    ]
  },
  {
    avatar: 'https://github.com/YuheiFUJITA.png',
    name: 'Yuhei FUJITA',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/YuheiFUJITA' },
      { icon: 'twitter', link: 'https://twitter.com/Yuhei_FUJITA' }
    ]
  },
  {
    avatar: 'https://github.com/YuheiFUJITA.png',
    name: 'Yuhei FUJITA',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/YuheiFUJITA' },
      { icon: 'twitter', link: 'https://twitter.com/Yuhei_FUJITA' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>メンバー</template>
    <template #lead>開発メンバーです。<br>※これは架空のプロジェクトであり、実際にこんな地獄絵図があるわけではありません。</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>PM</template>
    <template #lead>このプロジェクトのPMです</template>
    <template #members>
      <VPTeamMembers :size="medium" :members="pm" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>デザイン</template>
    <template #lead>このプロジェクトのデザインチームです</template>
    <template #members>
      <VPTeamMembers :size="small" :members="designers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>フロントエンド</template>
    <template #lead>このプロジェクトのフロントエンドチームです</template>
    <template #members>
      <VPTeamMembers :size="small" :members="frontends" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>バックエンド</template>
    <template #lead>このプロジェクトのバックエンドチームです</template>
    <template #members>
      <VPTeamMembers :size="small" :members="backends" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
