<template>
    <div id="footer">
        <footer>
            <p>
                <strong>Team AV: </strong><br>
                Sten-Egert, Gerda, Beatrice
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped>
#footer {
    position: bottom;
    height: 120px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}

footer {
    width: 100%;
    text-align: center;
    background-color: rgba(238, 238, 238, 0.722);
    border-radius: 8px;
    padding: 10px;
    line-height: 1.5;
}
</style>