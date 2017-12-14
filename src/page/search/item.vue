<template>
  <div class='item'>
    <img class="cover" :src="cover" alt="" />
    <h5>{title}</h5>
    <p class="author">{author}</p>
    <p class="meta" v-if="wordCount > 1000">{parseInt(wordCount / 10000, 0)}万字、{latelyFollower} 人在追</p>
    <p class="meta" v-if="wordCount <= 1000">{wordCount}万字、{latelyFollower} 人在追</p>
    <p v-if="shortIntro.length > 40">{shortIntro.substring(0, 40)}...</p>
    <p v-if="shortIntro.length <= 40">{shortIntro}</p>

  </div>
</template>
