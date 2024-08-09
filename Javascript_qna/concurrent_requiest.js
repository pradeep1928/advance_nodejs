


/**
 * The function `upgradeServerById` asynchronously upgrades a server by its ID and returns a promise
 * that resolves if the upgrade is successful and rejects if it fails.
 * @param serverId - The `serverId` parameter in the `upgradeServerById` function represents the unique
 * identifier of the server that you want to upgrade. This function is an asynchronous function that
 * simulates upgrading a server with the given `serverId`.
 * @returns The `upgradeServerById` function is an asynchronous function that upgrades a server by its
 * ID. It returns a Promise that resolves with a success message if the upgrade is successful, and
 * rejects with an error message if the upgrade fails.
 */
async function upgradeServerById(serverId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2
            if (success) {
                resolve(`Server ${serverId} upgrade successful` )
            } else {
                reject(`Server ${serverId} upgrade failed`)
            }
        }, 500)
    })
} 

// upgradeServerById(1).then((res) => console.log('res', res)).catch(err => console.log(err))

async function upgradeAll (server, successThreshold) {
    const promises = server.map((serverId) => 
        upgradeServerById(serverId).then(
            () => ({serverId, status: 'Success'}),
            () => ({serverId, status: 'Failed'})
        )
)
    const results = await Promise.all(promises)
    // console.log('results ==> ', results)
    const successCount = results.filter((result) => result.status == 'Success').length
    return successCount >= successThreshold ? 1: 0

}


const servers = [1, 2, 3, 4, 5, 6, 7, 8];
(async () => {
    const result = await upgradeAll(servers, 4)
    console.log('result ==> ', result)
})()
