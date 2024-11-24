<template>
    <!-- post container -->
    <div class="post">
        <!-- post header containing profile picture, username and date -->
        <div class="post-header">
            <img v-bind:src="post.profilePic" alt="profile picture" class="profile-pic" />
            <p class="username">{{ post.username }}</p>
            <p class="date">{{ formatDate(post.createTime) }}</p>
        </div>

        <!-- post image, if available -->
        <div v-if="post.picture" class="post-image">
            <img v-bind:src="post.picture" alt="post image" />
        </div>

        <!-- post body, if available -->
        <p v-if="post.body" class="post-text">{{ post.body }}</p>

        <!-- like button and likes count -->
        <div class="post-footer">
            <button class="like-button" @click="handleLikeClick">&#128077;</button>
            <div class="likes-count">{{ post.likesAmount }} likes</div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "PostComponent",
    props: {
        // defines post prop - post data and index passed from the parent component
        post: Object,
        index: Number,
    },
    methods: {
        ...mapActions(["increaseLikes"]),
        // method to format the creation time into a readable format
        formatDate(datetime) {
            return new Date(datetime).toLocaleString();
        },
        // method to increase the like count
        handleLikeClick() {
            this.increaseLikes(this.index); // calls Vuex action with index
        },
    },
};
</script>

<style scoped>
/* styling for the post container */
.post {
    width: 60%;
    margin: 0 auto;
    border: 1px;
    border-radius: 25px;
    padding: 10px;
    padding-inline: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    background-color: rgba(238, 238, 238, 0.722);
    transition: width 0.3s ease-in-out;
}

/* styling for the post content */
.post-content {
    width: 98%;
    margin: 0 auto;
}

/* styling for the profile picture, username and date */
.post-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    flex-wrap: nowrap;
}

/* styling for profile picture */
.profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

/* styling for username */
.username {
    margin-left: 10px;
}

/* styling for the date */
.date {
    color: #555;
    margin-left: auto;
    margin-right: 5px;
    white-space: nowrap;
    font-size: clamp(0.8rem, 2vw, 0.95rem);
}

/* styling for the post image */
.post-image img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
}

/* styling for the post body text */
.post-text {
    margin-top: 10px;
    text-align: left;
}

/* like button and likes count */
.post-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* styling for the like button */
.like-button {
    background-color: transparent;
    border: none;
    margin-bottom: 10px;
    font-size: 24px;
    cursor: pointer;
}

.like-button:hover {
    background-color: transparent;
    transform: scale(1.1);
}

.like-button:active {
    transform: scale(0.9);

}

/* styling for the likes count */
.likes-count {
    color: #555;
}


@media (max-width: 450px) {
    ul li {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }

    nav ul {
        margin-left: 0;
    }

    .post {
        width: 70%;
    }

    .post-header {
        flex-wrap: wrap;
        gap: 5px;
    }
}

@media (min-width: 1150px) {
    .post {
        width: 40%;
    }
}
</style>