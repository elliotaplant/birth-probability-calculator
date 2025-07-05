// Birth probability table
// Day 0 = conception, Day 280 = due date (40 weeks)
// Table extends to day 294 (end of week 42)

const birthProbabilityTable = {};

// Days 0-153: 0% probability (before viability)
for (let i = 0; i <= 153; i++) {
  birthProbabilityTable[i] = 0.0;
}

// Day 154 onwards - manual entries based on the transcribed data
birthProbabilityTable[154] = 0.00001;  // 0.001%
birthProbabilityTable[155] = 0.00001;
birthProbabilityTable[156] = 0.00001;
birthProbabilityTable[157] = 0.00001;
birthProbabilityTable[158] = 0.00001;
birthProbabilityTable[159] = 0.00001;
birthProbabilityTable[160] = 0.00001;  // 0.001%
birthProbabilityTable[161] = 0.000012;
birthProbabilityTable[162] = 0.000014;
birthProbabilityTable[163] = 0.000016;
birthProbabilityTable[164] = 0.000018;
birthProbabilityTable[165] = 0.00002;
birthProbabilityTable[166] = 0.00002;
birthProbabilityTable[167] = 0.00002;
birthProbabilityTable[168] = 0.00002;  // 0.002%
birthProbabilityTable[169] = 0.00002;
birthProbabilityTable[170] = 0.00002;  // 0.002%

// Linear interpolation for missing values
birthProbabilityTable[171] = 0.000025;
birthProbabilityTable[172] = 0.00003;
birthProbabilityTable[173] = 0.000035;
birthProbabilityTable[174] = 0.00004;
birthProbabilityTable[175] = 0.000045;
birthProbabilityTable[176] = 0.00005;
birthProbabilityTable[177] = 0.00005;
birthProbabilityTable[178] = 0.00005;
birthProbabilityTable[179] = 0.00005;
birthProbabilityTable[180] = 0.00005;  // 0.005%

birthProbabilityTable[181] = 0.000055;
birthProbabilityTable[182] = 0.00006;
birthProbabilityTable[183] = 0.000065;
birthProbabilityTable[184] = 0.00007;
birthProbabilityTable[185] = 0.000075;
birthProbabilityTable[186] = 0.00008;
birthProbabilityTable[187] = 0.000085;
birthProbabilityTable[188] = 0.00009;
birthProbabilityTable[189] = 0.000095;
birthProbabilityTable[190] = 0.0001;  // 0.01%

birthProbabilityTable[191] = 0.00012;
birthProbabilityTable[192] = 0.00014;
birthProbabilityTable[193] = 0.00016;
birthProbabilityTable[194] = 0.00018;
birthProbabilityTable[195] = 0.0002;
birthProbabilityTable[196] = 0.0002;
birthProbabilityTable[197] = 0.0002;
birthProbabilityTable[198] = 0.0002;
birthProbabilityTable[199] = 0.0002;
birthProbabilityTable[200] = 0.0002;  // 0.02%

birthProbabilityTable[201] = 0.00025;
birthProbabilityTable[202] = 0.0003;
birthProbabilityTable[203] = 0.00035;
birthProbabilityTable[204] = 0.0004;
birthProbabilityTable[205] = 0.00045;
birthProbabilityTable[206] = 0.0005;
birthProbabilityTable[207] = 0.0005;
birthProbabilityTable[208] = 0.0005;
birthProbabilityTable[209] = 0.0005;
birthProbabilityTable[210] = 0.0005;  // 0.05%

birthProbabilityTable[211] = 0.00055;
birthProbabilityTable[212] = 0.0006;
birthProbabilityTable[213] = 0.00065;
birthProbabilityTable[214] = 0.0007;
birthProbabilityTable[215] = 0.00075;
birthProbabilityTable[216] = 0.0008;
birthProbabilityTable[217] = 0.0008;
birthProbabilityTable[218] = 0.0008;
birthProbabilityTable[219] = 0.0008;
birthProbabilityTable[220] = 0.0008;  // 0.08%

birthProbabilityTable[221] = 0.00085;
birthProbabilityTable[222] = 0.0009;
birthProbabilityTable[223] = 0.00095;
birthProbabilityTable[224] = 0.001;
birthProbabilityTable[225] = 0.001;
birthProbabilityTable[226] = 0.001;
birthProbabilityTable[227] = 0.001;
birthProbabilityTable[228] = 0.001;
birthProbabilityTable[229] = 0.001;
birthProbabilityTable[230] = 0.001;  // 0.1%

birthProbabilityTable[231] = 0.0012;
birthProbabilityTable[232] = 0.0014;
birthProbabilityTable[233] = 0.0016;
birthProbabilityTable[234] = 0.0018;
birthProbabilityTable[235] = 0.002;
birthProbabilityTable[236] = 0.002;
birthProbabilityTable[237] = 0.002;
birthProbabilityTable[238] = 0.002;
birthProbabilityTable[239] = 0.002;
birthProbabilityTable[240] = 0.002;  // 0.2%

birthProbabilityTable[241] = 0.002;
birthProbabilityTable[242] = 0.002;
birthProbabilityTable[243] = 0.002;
birthProbabilityTable[244] = 0.002;
birthProbabilityTable[245] = 0.002;  // 0.2%
birthProbabilityTable[246] = 0.0022;
birthProbabilityTable[247] = 0.0024;
birthProbabilityTable[248] = 0.0026;
birthProbabilityTable[249] = 0.0028;
birthProbabilityTable[250] = 0.003;  // 0.3%

birthProbabilityTable[251] = 0.0034;
birthProbabilityTable[252] = 0.0038;
birthProbabilityTable[253] = 0.0042;
birthProbabilityTable[254] = 0.0046;
birthProbabilityTable[255] = 0.005;  // 0.5%
birthProbabilityTable[256] = 0.006;
birthProbabilityTable[257] = 0.007;
birthProbabilityTable[258] = 0.008;
birthProbabilityTable[259] = 0.009;
birthProbabilityTable[260] = 0.01;   // 1.0%

birthProbabilityTable[261] = 0.0115;
birthProbabilityTable[262] = 0.013;
birthProbabilityTable[263] = 0.0145;
birthProbabilityTable[264] = 0.015;
birthProbabilityTable[265] = 0.015;  // 1.5%
birthProbabilityTable[266] = 0.0175;
birthProbabilityTable[267] = 0.02;
birthProbabilityTable[268] = 0.0225;
birthProbabilityTable[269] = 0.025;
birthProbabilityTable[270] = 0.03;   // 3.0%

birthProbabilityTable[271] = 0.035;
birthProbabilityTable[272] = 0.04;
birthProbabilityTable[273] = 0.045;  // 4.5% - Peak probability
birthProbabilityTable[274] = 0.0425;
birthProbabilityTable[275] = 0.04;   // 4.0%
birthProbabilityTable[276] = 0.0375;
birthProbabilityTable[277] = 0.035;  // 3.5%
birthProbabilityTable[278] = 0.0325;
birthProbabilityTable[279] = 0.03125;
birthProbabilityTable[280] = 0.03;   // 3.0% - Due date

birthProbabilityTable[281] = 0.0285;
birthProbabilityTable[282] = 0.027;
birthProbabilityTable[283] = 0.025;  // 2.5%
birthProbabilityTable[284] = 0.0225;
birthProbabilityTable[285] = 0.02;   // 2.0%
birthProbabilityTable[286] = 0.018;
birthProbabilityTable[287] = 0.016;
birthProbabilityTable[288] = 0.014;
birthProbabilityTable[289] = 0.012;
birthProbabilityTable[290] = 0.01;   // 1.0%

birthProbabilityTable[291] = 0.0085;
birthProbabilityTable[292] = 0.007;
birthProbabilityTable[293] = 0.0055;
birthProbabilityTable[294] = 0.004;  // End of week 42

module.exports = { birthProbabilityTable };