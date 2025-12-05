async function main() {

    function isPrime(num) {
        if (num < 2) return false;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        
        return true;
    }

    const stop = int(await input('Stop value: '));

    for (let i = 0; i < stop; i++) {
        if (isPrime(i))
            print('- ' + i);
    }
}
