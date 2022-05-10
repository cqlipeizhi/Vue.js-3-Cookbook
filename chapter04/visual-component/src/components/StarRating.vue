<template>
  <!-- <div>
    <StarRatingInput v-if="!voted" :max-rating="maxRating" @final-vote="vote">
      Rate this Place
    </StarRatingInput>
    <StarRatingDisplay
      v-else
      :max-rating="maxRating"
      :rating="rating || rank"
      :votes="votes"
    />
  </div> -->
  <component :is="starComponent" :max-rating="maxRating" :rating="rating||rank" :votes="votes" @final-vote="vote">
    Rate this Place
  </component>
</template>

<script>
import StarRatingInput from './StarRatingInput'
import StarRatingDisplay from './StarRatingDisplay'
import StarRatingDisplayMixin from '../mixins/starRatingDisplay'

export default {
  name: 'StarRating',
  components: {
    StarRatingInput,
    StarRatingDisplay
  },
  mixins: [StarRatingDisplayMixin],
  provide: {
    starRating: true
  },
  // props: {
  //   maxRating: {
  //     type: Number,
  //     required: false,
  //     default: 5
  //   },
  //   rating: {
  //     type: Number,
  //     required: false,
  //     default: 0
  //   },
  //   votes: {
  //     type: Number,
  //     required: false,
  //     default: 0
  //   }
  // },
  data: () => ({
    rank: 0,
    voted: false
  }),
  computed: {
    starComponent () {
      if (!this.voted) {
        return StarRatingInput
      } else {
        return StarRatingDisplay
      }
    }
  },
  methods: {
    vote (rank) {
      this.rank = rank
      this.voted = true
    }
  }
}
</script>
