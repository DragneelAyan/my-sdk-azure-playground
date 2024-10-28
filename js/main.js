const { BlobServiceClient, StorageSharedKeyCredential } = require('@azure/storage-blob')
const process = require('process')

const account_name = process.env.ACCOUNT_NAME
const account_key = process.env.ACCOUNT_KEY

const key_credential = new StorageSharedKeyCredential(account_name, account_key)

const blob_client = new BlobServiceClient(
    'https://${account_name}.blob.core.windows.net',
    key_credential
)



async function container_inventory() {
    let containers = blob_client.listContainers()
    for await (const container of containers){
        console.log(container.name)
    }
}

container_inventory()
