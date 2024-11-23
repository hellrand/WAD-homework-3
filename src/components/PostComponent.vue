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

        <!-- like button -->
        <div class="like-button">&#128077;</div>
    </div>
</template>
  
<script>
export default {
    name: "PostComponent",
    props: {
        // defines post prop - post data passed from the parent component
        post: Object,
    },
    methods: {
        // method to format the creation time into a readable format
        formatDate(datetime) {
        return new Date(datetime).toLocaleString();
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
}

/* styling for the post content */
.post-content {
    width: 98%;
    margin: 0 auto;
}

/* styling for the post header */
.post-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
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
}

/* styling for the post image */
.post-image img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
}

/* styling for the post body text */
.post-text {
    margin-top: 10px;
    text-align: left;
}

.like-button {
    color: white;
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 24px;
    cursor: pointer;
    text-align: left;
}

.like-button:focus {
    outline: none; /* Ensures no outline on focus */
    box-shadow: 0 0 5px rgba(0, 115, 230, 0.5); /* Optionally add a subtle glow for focus */
}

@media (max-width: 768px) {
    main {
        padding: 10px;
    }
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
        width: 80%;
    }
}

@media (min-width: 1150px) {
    .post {
        width: 40%;
    }
}
</style>