async function main() {

    async function isPrime(num) {
        if (num < 2) return false;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            await sleep(0)
            if (num % i === 0) return false;
        }
        
        return true;
    }

    const stop = int(await input('Stop value: '));

    for (let i = 0; i < stop; i++) {
        if (await isPrime(i))
            print('- ' + i);
    }
}
