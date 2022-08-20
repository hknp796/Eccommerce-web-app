export default function ({ store, redirect }) {
  console.log({ store, redirect })
  if (store.state.auth.loggedIn) {
    return redirect('/')
  }
}
