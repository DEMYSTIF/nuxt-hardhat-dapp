<template>
    <section>
        <h1>Issue Certificate</h1>
        <form action="/api/issue" method="post">
            <label for="certID">Enter ID: </label>
            <input type="text" name="certID" required />
            <br /><br />
            <label for="name">Enter Candidate Name: </label>
            <input type="text" name="name" required />
            <br /><br />
            <label for="course">Course: </label>
            <select name="course" required>
                <option hidden selected>Select Course</option>
                <option value="CBA">CBA</option>
                <option value="CED">CED</option>
                <option value="CHF">CHF</option>
                <option value="CBR">CBR</option>
            </select>
            <br /><br />
            <label for="grade">Grade: </label>
            <select name="grade" required>
                <option hidden selected>Select Grade</option>
                <option value="S">S</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <br /><br />
            <label for="date">Date: </label>
            <input type="date" name="date" required />
            <br /><br />
            <button type="submit">Issue</button>
        </form>
    </section>
    <section class="search">
        <h1>Fetch Certificate</h1>
        <form action="/api/fetch" method="post">
            <input type="text" name="certID" />
            <button type="submit">Search</button>
        </form>
    </section>
</template>

<style scoped>
.search {
    padding-top: 50px;
}
</style>