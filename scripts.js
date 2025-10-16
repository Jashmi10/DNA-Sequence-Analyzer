function analyzeDNA() {
    let dna = document.getElementById("dnaInput").value.toUpperCase();
    let validBases = /^[ATCG]+$/;

    if (!dna.match(validBases)) {
        alert("Please enter a valid DNA sequence (A, T, C, G only).");
        return;
    }

    // Complementary strand
    let complementMap = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
    let complementaryStrand = dna.split("").map(base => complementMap[base]).join("");

    // GC Content calculation
    let gcCount = (dna.match(/[GC]/g) || []).length;
    let gcPercentage = ((gcCount / dna.length) * 100).toFixed(2);

    // Display results
    document.getElementById("complementary").textContent = complementaryStrand;
    document.getElementById("gcContent").textContent = gcPercentage;
}
