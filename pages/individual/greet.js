export default function Greet() {
    return (
        <>
            <div class="container py-md-1 py-1">
                <div class="title-main text-center mx-auto mb-md-1 mb-1" style="max-width:500px;">
                    <h3 class="title-style">Welcome - ' + username</h3>
                    <p class="">'You logged in as - ' + roles</p>
                    <p class="">Your assigned class is - + enrolledClass</p>
                </div>

            </div>
        </>
    )
}