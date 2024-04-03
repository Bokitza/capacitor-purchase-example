import { createSignal } from 'solid-js'

import './App.css'
import 'cordova-plugin-purchase'
import { Capacitor } from '@capacitor/core'

function App() {
    const [log, setLog] = createSignal('Logging')
    const { store, ProductType, Platform } = CdvPurchase

    store.error((e) => {
        setLog('Error' + e.message)
        console.log({ e })
    })

    //Initialize the products you want to be available in this screen.
    store.register([
        {
            type: ProductType.NON_CONSUMABLE,
            id: 'new_samples',
            platform:
                Capacitor.getPlatform() === 'ios'
                    ? Platform.APPLE_APPSTORE
                    : Platform.GOOGLE_PLAY,
        },
    ])

    //Initialize the store plugin.
    store.initialize()

    //Listeners to the different states of the transaction
    store
        .when()
        .productUpdated((e) => {
            setLog('product is updated')
            console.log({ e })
        })
        .approved((e) => {
            setLog('product is approved!')
            console.log({ e })
        })

    async function makePurchase() {
        const myProduct = store.get(
            'new_samples',
            Capacitor.getPlatform() === 'ios'
                ? Platform.APPLE_APPSTORE
                : Platform.GOOGLE_PLAY
        )
        await myProduct?.getOffer()?.order()
    }

    return (
        <section style={{ 'background-color': 'black', height: '100%' }}>
            <div
                style={{
                    display: 'flex',
                    gap: '12px',
                    'align-items': 'center',
                    'justify-content': 'center',
                    'flex-wrap': 'wrap',
                }}
            >
                <button name="kick" class="btn"></button>
                <button name="snare" class="btn"></button>
                <button name="hat" class="btn"></button>
            </div>
            <div
                style={{
                    'margin-top': '12px',
                    display: 'flex',
                    gap: '12px',
                    'align-items': 'center',
                    'justify-content': 'center',
                    'flex-wrap': 'wrap',
                }}
            >
                <button name="clap" class="btn"></button>
                <button name="fx1" class="btn"></button>
                <button name="fx2" class="btn"></button>
            </div>
            <button onclick={makePurchase} style={{ 'margin-top': '12px' }}>
                want more? Purchase sounds here!
            </button>
        </section>
    )
}

export default App
