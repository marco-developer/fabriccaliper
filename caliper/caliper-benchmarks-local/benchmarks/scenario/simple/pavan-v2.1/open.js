'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class MyWorkload extends WorkloadModuleBase {
    constructor() {
        super();
    }
    
    // async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
    //     await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);

    //     for (let i=0; i<this.roundArguments.assets; i++) {
    //         const assetID = `${this.workerIndex}_${i}`;
    //         console.log(`Worker ${this.workerIndex}: Creating asset ${assetID}`);
    //         const request = {
    //             contractId: this.roundArguments.contractId,
    //             contractFunction: 'createCar',
    //             invokerIdentity: 'Admin@org1.example.com',
    //             contractArguments: [assetID,'AA','B','C','D'],
    //             readOnly: false
    //         };

    //         await this.sutAdapter.sendRequests(request);
    //     }
    // }
    
    async submitTransaction() {
        const randomId = Math.floor(Math.random()*this.roundArguments.assets);
        const myArgs = {
            contractId: this.roundArguments.contractId,
            contractFunction: 'createCar',
            invokerIdentity: 'Admin@org1.example.com',
            contractArguments: [`${this.workerIndex}_${randomId}`,'AA','B','C','D'],
            readOnly: false            
            // contractId: this.roundArguments.contractId,
            // contractFunction: 'queryCar',
            // invokerIdentity: 'Admin@org1.example.com',
            // contractArguments: [`${this.workerIndex}_${randomId}`],
            // readOnly: true
        };

        await this.sutAdapter.sendRequests(myArgs);
    }
    
    // async cleanupWorkloadModule() {
    //     for (let i=0; i<this.roundArguments.assets; i++) {
    //         const assetID = `${this.workerIndex}_${i}`;
    //         console.log(`Worker ${this.workerIndex}: Deleting asset ${assetID}`);
    //         const request = {
    //             contractId: this.roundArguments.contractId,
    //             contractFunction: 'DeleteAsset',
    //             invokerIdentity: 'Admin@org1.example.com',
    //             contractArguments: [assetID],
    //             readOnly: false
    //         };

    //         await this.sutAdapter.sendRequests(request);
    //     }
    // }
}

function createWorkloadModule() {
    return new MyWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;
// 'use strict';

// module.exports.info = 'opening accounts';
// const { v1: uuidv4 } = require('uuid')

// let account_array = [];

// let bc, contx;
// var txnPerBatch = 1
// module.exports.init = function (blockchain, context, args) {
//     if (!args.hasOwnProperty('txnPerBatch')) {
//         args.txnPerBatch = 1;
//     }
//     txnPerBatch = args.txnPerBatch;
//     bc = blockchain;
//     contx = context;

//     return Promise.resolve();
// };


// function generateWorkload() {
//     let workload = [];
//     for (let i = 0; i < txnPerBatch; i++) {

//         workload.push({
//             chaincodeFunction: 'createCar',
//             chaincodeArguments: [uuidv4(), 'A', 'B', 'C', "d"],
//         });
//     }
//     return workload;
// }

// module.exports.run = function () {
//     let args = generateWorkload();
//     return bc.invokeSmartContract(contx, 'fabcar', '1', args);
// };

// module.exports.end = function () {
//     return Promise.resolve();
// };

// module.exports.account_array = account_array;
