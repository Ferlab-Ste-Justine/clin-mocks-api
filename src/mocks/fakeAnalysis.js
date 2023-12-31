export default [
    {
        "variant": {
            "chromosome": "chr16",
            "start_position": 2498261,
            "end_position": 2498262,
            "ref": "AT",
            "alt": "A",
            "variation_type": "INDEL"
        },
        "sample_data": {
            "confidence_level": "HIGH",
            "depth": 75,
            "depth_ref": 35,
            "depth_alt": 40,
            "mapping_quality": 249.75,
            "vaf": 0.5333333333333333,
            "quality": 147.12,
            "zygosity": "HET",
            "gq": 50.0,
            "pl": "79:0:50",
            "family_zygosities": {
                "mother_zygosity": "HET",
                "father_zygosity": "HOM_REF"
            }
        },
        "annotations": {
            "transcripts": [
                {
                    "transcript_type": "ENSEMBL",
                    "gene": "TBC1D24",
                    "region": "EXONIC",
                    "effect": "FRAMESHIFT",
                    "transcript": "ENST00000293970.9",
                    "hgvc_p": "p.His336fs",
                    "hgvc_c": "c.1008delT",
                    "transcripts_count": 8,
                    "exon_number": 4,
                    "transcript_exon_count": 8,
                    "closest_distance_to_exon": 0
                },
                {
                    "transcript_type": "REFSEQ",
                    "gene": "TBC1D24",
                    "region": "EXONIC",
                    "effect": "FRAMESHIFT",
                    "transcript": "NM_001199107.2",
                    "hgvc_p": "p.His336GlnfsTer12",
                    "hgvc_c": "c.1008del",
                    "transcripts_count": 2,
                    "exon_number": 4,
                    "transcript_exon_count": 8,
                    "closest_exon": 4,
                    "closest_distance_to_exon": 0
                }
            ],
            "frequencies": {
                "aggregated_frequency": 5.274287e-5,
                "max_gnomad_frequency": 0.00011763667862396687
            },
            "predictions": {
                "dbsnp": "rs398122967",
                "splice_ai": 0.01
            },
            "clinical_evidences": {
                "clinvar": {
                    "submissions_by_classification": [
                        {
                            "level": "PATHOGENIC",
                            "count": 11
                        },
                        {
                            "level": "OTHER",
                            "count": 1
                        }
                    ]
                },
                "uniprot": {}
            }
        },
        "classification": {
            "acmg_classification": "PATHOGENIC",
            "acmg_rules": [
                {
                    "name": "PS1",
                    "weight": 7,
                    "is_met": false,
                    "influence": "StrongPathogenic"
                },
                {
                    "name": "PP3",
                    "weight": 2,
                    "is_met": false,
                    "influence": "SupportingPathogenic"
                },
                {
                    "name": "PM2",
                    "weight": 3,
                    "is_met": true,
                    "influence": "ModeratePathogenic"
                },
                {
                    "name": "PVS1",
                    "weight": 10,
                    "is_met": true,
                    "influence": "VeryStrongPathogenic"
                },
                {
                    "name": "PM4",
                    "weight": 3,
                    "is_met": false,
                    "influence": "ModeratePathogenic"
                },
                {
                    "name": "PM5",
                    "weight": 3,
                    "is_met": false,
                    "influence": "ModeratePathogenic"
                },
                {
                    "name": "PM1",
                    "weight": 3,
                    "is_met": false,
                    "influence": "ModeratePathogenic"
                },
                {
                    "name": "PP2",
                    "weight": 2,
                    "is_met": false,
                    "influence": "SupportingPathogenic"
                },
                {
                    "name": "PP5",
                    "weight": 2,
                    "is_met": true,
                    "influence": "SupportingPathogenic"
                },
                {
                    "name": "BA1",
                    "weight": -10,
                    "is_met": false,
                    "influence": "BenignStandAlone"
                },
                {
                    "name": "BS1",
                    "weight": -6,
                    "is_met": false,
                    "influence": "StrongBenign"
                },
                {
                    "name": "BS2",
                    "weight": -6,
                    "is_met": false,
                    "influence": "StrongBenign"
                },
                {
                    "name": "BP1",
                    "weight": -2,
                    "is_met": false,
                    "influence": "SupportingBenign"
                },
                {
                    "name": "BP3",
                    "weight": -2,
                    "is_met": false,
                    "influence": "SupportingBenign"
                },
                {
                    "name": "BP4",
                    "weight": -2,
                    "is_met": false,
                    "influence": "SupportingBenign"
                },
                {
                    "name": "BP7",
                    "weight": -2,
                    "is_met": false,
                    "influence": "SupportingBenign"
                },
                {
                    "name": "BP6",
                    "weight": -2,
                    "is_met": false,
                    "influence": "SupportingBenign"
                },
                {
                    "name": "PM6",
                    "weight": 5,
                    "is_met": false
                },
                {
                    "name": "PS2",
                    "weight": 5,
                    "is_met": false
                },
                {
                    "name": "PS3",
                    "weight": 10,
                    "is_met": false,
                    "influence": "StrongPathogenic"
                },
                {
                    "name": "BS3",
                    "weight": -10,
                    "is_met": false,
                    "influence": "StrongBenign"
                },
                {
                    "name": "PM3",
                    "weight": 5,
                    "is_met": false
                },
                {
                    "name": "BP2",
                    "weight": -5,
                    "is_met": false
                },
                {
                    "name": "PP1",
                    "weight": 2,
                    "is_met": false
                },
                {
                    "name": "BS4",
                    "weight": -10,
                    "is_met": false
                },
                {
                    "name": "PP4",
                    "weight": 2,
                    "is_met": false
                },
                {
                    "name": "BP5",
                    "weight": -2,
                    "is_met": false
                },
                {
                    "name": "PS4",
                    "weight": 10,
                    "is_met": false,
                    "influence": "StrongPathogenic"
                }
            ]
        },
        "included_in_analysis_workbench": false,
        "phenotypes": [
            "global developmental delay",
            "intellectual disability",
            "coarse facial features",
            "delayed speech and language development",
            "abnormality of the dentition",
            "autistic behavior",
            "strabismus"
        ],
        "priority": {
            "score": 0.9089091283319308
        },
        "variant_franklin_link": "https://franklin.genoox.com/clinical-db/variant/snp/chr16-2498261-AT-A-HG38"
    }
]