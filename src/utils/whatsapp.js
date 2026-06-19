import { WA_NUMBER } from '../config/constants'

/**
 * Generate WhatsApp URL untuk lahan komersial (B2B)
 * @param {string} namaLahan - Nama/Lokasi lahan komersial
 * @returns {string} URL WhatsApp lengkap
 */
export function generateWaUrlKomersial(namaLahan) {
  const message = `[INFO B2B] Halo Admin, saya melihat lahan komersial di ${namaLahan}. Bisa kirimkan dokumen legalitasnya?`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

/**
 * Generate WhatsApp URL untuk tanah kavling (B2C)
 * @param {string} blok - Blok kavling
 * @param {number} nomor - Nomor kavling
 * @returns {string} URL WhatsApp lengkap
 */
export function generateWaUrlKavling(blok, nomor) {
  const message = `[INFO B2C] Halo Admin, saya tertarik dengan Kavling Blok ${blok}-${nomor}. Boleh minta info detail dan simulasi cicilan in-house?`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}
