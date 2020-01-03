/**
 * ///////////
 * Donor Darah
 * ///////////
 * 
 * Anda akan mensimulasikan suatu rumah sakit dengan daftar golongan darah beserta nama pasien yang memiliki golongan darah tersebut.
 * Wajib menggunakan modular function untuk solve soal ini.
*/

var bloodTypeInfo = {
  A: ['Olive', 'Queen', 'Scala', 'Uranium', 'Wick', 'Yongki'],
  B: ['Nancy', 'Patrick', 'Rust', 'Tesla', 'Vans', 'Xavier'],
  AB: ['Bolt', 'Daniel', 'Frans', 'Hans', 'Jack', 'Laura'],
  O: ['Alan', 'Charly', 'Ester', 'George', 'Intan', 'Mona', 'Zend']
};

// Release 0 - Get Type dari golongan darah orang yang diinput

function getType(person) {
  // kode disini

  let result = '';

  for (const key in bloodTypeInfo) {
    for (const value of bloodTypeInfo[key]) {
      if (value === person) {
        result += key;
        break;
      }
    }
  }

  if (result.length === 0) {
    return null;
  }
  else {
    return result;
  }
}

console.log('Release 0\n==========');
console.log(getType('Bolt')); // 'AB'
console.log(getType('Charly')); // 'O'
console.log(getType('Nancy')); // 'B'
console.log(getType('Bolt')); // 'AB'
console.log(getType('Sule')); // null
console.log();

// Release 1 - canDonor

/**
 * Anda harus mensimulasikan suatu sistem rumah sakit dimana akan ada fungsi pengecekan kecocokan golongan darah antara pendonor dan penerima dengan syarat sebgai berikut:
 * A = A, AB (A dapat mendonor ke gol darah A dan AB)
 * B = B, AB
 * AB = AB (AB adalah penerima universal)
 * O = A, B, AB, O (O adalah Donor universal)
 * 
 * Notes:
 * @param Recepient adalah orang yang menerima donor.
 * @param Donor adalah pendonor.
 * Wajib menggunakan function getType.
*/

function canDonor(recepient, donor) {
  // kode disini
  let rec = getType(recepient);
  let don = getType(donor);
  let result = 0;

  switch (don) {
    case 'A':
      switch (rec) {
        case 'A':
          result++;
          break;
        case 'AB':
          result++;
          break;
        default:
          break;
      }
      break;
    case 'B':
      switch (rec) {
        case 'B':
          result++;
          break;
        case 'AB':
          result++;
          break;
        default:
          break;
      }
      break;
    case 'AB':
      switch (rec) {
        case 'AB':
          result++
          break;
        default:
          break;
      }
      break;
    case 'O':
      result++;
      break;
    default:
      break;
  }

  if (result === 0) {
    return false;
  }
  else if (result !== 0) {
    return true;
  }
}

console.log('Release 1\n==========');
console.log(canDonor('Bolt', 'Alan')); // true
console.log(canDonor('Charly', 'Olive')); // false
console.log(canDonor('Nancy', 'Patrick')); // true
console.log(canDonor('Bolt', 'Alan')); // true
console.log(canDonor('Charly', 'Daniel')); // false
console.log();

// Release 2 - transfussionProcess

/**
 * Implementasikan function transfusionProcess, yang akan menerima parameter
 *
 * @param recipients daftar orang penerima
 * @param  donors 	daftar orang pendonor
 *
 * Fungsi ini akan mencari pendonor yang cocok dari masing-masing penerima dengan syarat pendonor hanya bisa mendonorkan darahnya sekali saja.
 * 
 * Notes:
 * Kalian tidak harus memikirkan optimisasi golongan darah.
 * Wajib menggunakan function canDonor.
*/

function transfusionProcess(recepients, donors) {
  // kode disini
}

console.log('Release 2\n==========');
console.log(transfusionProcess(['Bolt', 'Queen'], ['Alan', 'Tesla']));

/*
  Bolt menerima donor dari Alan
  Queen tidak selamat
*/

console.log('-------------------------------');

console.log(
	transfusionProcess(
		['Nancy', 'Frans', 'Scala', 'Alan'],
		['Ester', 'Bolt', 'Rust']
	)
);

/*
  Nancy menerima donor dari Ester
  Frans menerima donor dari Bolt
  Scala tidak selamat
  Alan tidak selamat
*/